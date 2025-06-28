import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-select-laws-modal',
  templateUrl: './select-laws-modal.component.html',
  styleUrls: ['./select-laws-modal.component.scss']
})
export class SelectLawsModalComponent implements OnInit {
  selectedLaws: string[] = [];
  activeLanguage = 'ru';
  selectedLawsMap = new Map([
    ['Семейное право', 'familyLaw'],
    ['Отбасы құқығы', 'familyLaw'],
    ['Трудовое право', 'workCode'],
    ['Еңбек құқығы', 'workCode'],
    ['Интеллектуальное право', 'intellectualProperty'],
    ['Зияткерлік құқық', 'intellectualProperty'],
    ['Корпоративное право', 'corporateLaw'],
    ['Корпоративтік құқық', 'corporateLaw'],
  ]);
  lawsRu = [
    'Семейное право',
    'Трудовое право',
    'Интеллектуальное право',
    'Корпоративное право',
  ];

  lawsKz = [
    'Отбасы құқығы',
    'Еңбек құқығы',
    'Зияткерлік құқық',
    'Корпоративтік құқық',
  ];

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private languageService: LanguageService,
    private bsModalRef: BsModalRef,
  ) {}

  ngOnInit(): void {
    this.languageService.getLanguage()
      .subscribe((language) => {
        this.activeLanguage = language;
      });
  }

  onCheckboxChange(event: any): void {
    const value = event.target.value;
    if (event.target.checked) {
      if (this.selectedLaws.length < 2) {
        this.selectedLaws.push(value);
      } else {
        event.target.checked = false;
        alert('Выбрать можна только 2 закона.');
      }
    } else {
      this.selectedLaws = this.selectedLaws.filter((law) => law !== value);
    }
  }

  isValidSelection(): boolean {
    return this.selectedLaws.length === 2;
  }

  submitSelection(): void {
    this.selectedLaws = this.selectedLaws.map(item => this.selectedLawsMap.get(item));
    const user = this.authService.user$.value;
    this.firestore.collection('users').doc(user.uid).update({
      selectedLaws: this.selectedLaws,
    }).then(() => {
      this.bsModalRef.hide();
    }).catch(error => {
      console.error('Error updating document:', error);
    });
  }
}
