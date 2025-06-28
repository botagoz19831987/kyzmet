import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { StorageService } from '../../shared/services/storage.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  news = {};
  language$: Observable<string>;
  isLoading = true;

  constructor(private db: AngularFirestore, private storageService: StorageService) {}

  ngOnInit(): void {
    this.language$ = this.storageService.storageChange$.pipe(
      filter(({ storageArea }) => storageArea === 'sessionStorage'),
      filter(({ key }) => key === 'lang'),
      pluck('value')
    );

    this.db.collection('posts').snapshotChanges().subscribe(data => {
      data.map(e => {
        console.log(e.payload.doc.data());
        this.news[e.payload.doc.id] = e.payload.doc.data(); });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  get isNews(): boolean {
    return Object.keys(this.news).length > 0;
  }

}
