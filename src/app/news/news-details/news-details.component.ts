import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {StorageService} from '../../shared/services/storage.service';
import {filter, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.less']
})
export class NewsDetailsComponent implements OnInit {
  news = {};
  language$: Observable<string>;
  activeItem = this.activatedRoute.snapshot.params.id;
  isLoading = true;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private db: AngularFirestore,
    private storageService: StorageService
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeItem = this.activatedRoute.snapshot.params.id;
    });
  }

  ngOnInit(): void {
    this.language$ = this.storageService.storageChange$.pipe(
      filter(({ storageArea }) => storageArea === 'sessionStorage'),
      filter(({ key }) => key === 'lang'),
      pluck('value')
    );

    this.db.collection('posts').snapshotChanges().subscribe(data => {
      data.map(e => { this.news[e.payload.doc.id] = e.payload.doc.data(); });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  get isNews(): boolean {
    return Object.keys(this.news).length > 0;
  }

  getActiveItem(lang): any {
    return this.news[lang].items.find(i => i.id === this.activeItem);
  }
}
