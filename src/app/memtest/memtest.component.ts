import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import {
  administrativeCivilServiceFirst,
  administrativeCivilServiceSecond,
  administrativeCivilServiceThird, corpAFirst,
  lawEnforcementServiceFirst,
  lawEnforcementServiceThird,
  lawEnforcementServiceSecond,
  govForPeople
} from '../components/exam/exams';
import {
  adminProcedures,
  antiCorruption,
  citizensAppeal,
  civilService,
  constitution,
  ethicalCode, government, legalAct, mgius, president, publicServices, selfService
} from '../components/test/tests';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {IProduct} from '../shared/models/product.model';
import {LanguageService} from '../shared/services/language.service';
import {
  administrativeCivilServicePilotProject
} from '../components/exam/exams/administrative-civil-service-pilot-project';
import {notariat} from '../components/exam/exams/notariat';
import {advocacy} from '../components/exam/exams/advocacy';
import {headOfEducationalOrganizationFirst} from '../components/exam/exams/head-of-educational-organization-first';
import {judicialCorp} from '../components/exam/exams/judicial-corp';
import {privateBailiffExam} from '../components/exam/exams/private-bailiff';
import {TelegramApiService} from '../shared/services/telegram-api.service';
import {TranslateService} from '@ngx-translate/core';
import {take} from 'rxjs/operators';
import {PaymentService} from '../shared/services/payment.service';
import { IUser } from '../shared/models/user.model';
import { headOfEducationalOrganizationSecond } from '../components/exam/exams/head-of-educational-organization-second';

@Component({
  selector: 'app-memtest',
  templateUrl: './memtest.component.html',
  styleUrls: ['./memtest.component.scss']
})
export class MemtestComponent implements OnInit {
  public activeLanguage = 'kz';
  @ViewChild('childModal', {static: false}) childModal?: ModalDirective;
  isLoading = true;
  modalRef?: BsModalRef;
  adminExams = [
    administrativeCivilServiceFirst,
    administrativeCivilServiceSecond,
    administrativeCivilServiceThird,
    administrativeCivilServicePilotProject
  ];
  lawExams = [
    lawEnforcementServiceFirst,
    lawEnforcementServiceSecond,
    lawEnforcementServiceThird
  ];
  conExams = [
    govForPeople
  ];
  corpAExams = [
    corpAFirst
  ];
  notariatExams = [notariat];
  advocacyExams = [advocacy];
  headOfEducationalOrganizationExam = [headOfEducationalOrganizationFirst, headOfEducationalOrganizationSecond];
  judicialCorpsExam = [judicialCorp];
  privateBailiffExam = [privateBailiffExam];
  tests = [
    adminProcedures,
    antiCorruption,
    citizensAppeal,
    civilService,
    constitution,
    ethicalCode,
    government,
    legalAct,
    mgius,
    president,
    publicServices,
    selfService
  ];

  imgCollection: Array<object> = [
    {
      image: '../../assets/images/testimonials/1.jpg',
      thumbImage: '../../assets/images/testimonials/1.jpg'
    },
    {
      image: '../../assets/images/testimonials/2.jpg',
      thumbImage: '../../assets/images/testimonials/2.jpg'
    },
    {
      image: '../../assets/images/testimonials/3.jpg',
      thumbImage: '../../assets/images/testimonials/3.jpg'
    },
    {
      image: '../../assets/images/testimonials/4.jpg',
      thumbImage: '../../assets/images/testimonials/4.jpg'
    },
    {
      image: '../../assets/images/testimonials/5.jpg',
      thumbImage: '../../assets/images/testimonials/5.jpg'
    },
    {
      image: '../../assets/images/testimonials/6.jpg',
      thumbImage: '../../assets/images/testimonials/6.jpg'
    },
    {
      image: '../../assets/images/testimonials/7.jpg',
      thumbImage: '../../assets/images/testimonials/7.jpg'
    },
    {
      image: '../../assets/images/testimonials/8.jpg',
      thumbImage: '../../assets/images/testimonials/8.jpg'
    }
  ];
  userProduct: string;
  prod: any[] = [];
  user: IUser;
  isProductActive: any;
  instructionLink = '';

  formName = '';
  formNumber = '';
  showFormError = false;
  requestToTelegramSent = false;

  reserveMode = null;

  notariatIncludedLawsKz = [
    'ҚР Азаматтық кодексi',
    'ҚР Жер кодексі',
    'Неке (ерлі-зайыптылық) және отбасы туралы кодексi',
    'ҚР әкімшілік рәсімдік-процестік кодексі',
    '«Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заң',
    '«Жылжымайтын мүлікке құқықтарды мемлекеттік тіркеу туралы» Заң',
    '«Тұрғын үй қатынастары туралы» Заң',
    '«Нотариат туралы» Заң',
    '«Қылмыстық жолмен алынған кірістерді заңдастыруға (жылыстатуға) және терроризмді қаржыландыруға қарсы іс-қимыл туралы» Заң',
  ];
  advocacyIncludedLaws = [
    'ҚР Азаматтық кодексi',
    'ҚР Азаматтық процестік кодексі',
    'ҚР Қылмыстық кодексi',
    'ҚР Қылмыстық-процестік кодексi',
    'ҚР Әкімшілік құқық бұзушылық туралы кодексi',
    '«Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заң',
    'ҚР әкімшілік рәсімдік-процестік кодексі',
    '«Адвокаттық қызмет және заң көмегі туралы» Заң',
    '«Қылмыстық жолмен алынған кірістерді заңдастыруға (жылыстатуға) және терроризмді қаржыландыруға қарсы іс-қимыл туралы» Заң'
  ];
  bailiffIncludedLaws = [
    'Атқарушылық iс жүргiзу және сот орындаушыларының мәртебесi туралы',
    'ҚР әкімшілік рәсімдік-процестік кодексі',
    'ҚР Азаматтық кодексi',
    'ҚР Азаматтық процестік кодексі',
    'ҚР Қылмыстық кодексi',
    'ҚР Қылмыстық-процестік кодексi',
    'ҚР Әкімшілік құқық бұзушылық туралы кодексi',
    'Неке (ерлі-зайыптылық) және отбасы туралы кодексi'
  ];
  headOfEducationalOrganizationFirstIncludedLaws = [
    'Қазақстан Республикасының Еңбек Кодексі',
    '«Білім туралы» Заң',
    '«Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заң',
    '«Педагог мәртебесі туралы» Заң',
    'ҚР Оқу-ағарту министрінің 2022 жылғы 3 тамыздағы № 348 бұйрығы',
    'ҚР Оқу-ағарту министрінің 2022 жылғы 31 тамыздағы № 385 бұйрығы'
  ];
  headOfEducationalOrganizationSecondIncludedLaws = [
    '«Педагог мәртебесі туралы» Заң',
    '«Білім туралы» Заң',
    '«Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заң',
    'ҚР Оқу-ағарту министрінің 2022 жылғы 3 тамыздағы № 348 бұйрығы',
    'Неке (ерлі-зайыптылық) және отбасы туралы кодекс',
    'Қазақстан Республикасының Еңбек Кодексі',
    '«Қазақстан Республикасындағы баланың құқықтары туралы» Заң',
  ];
  judicialcorpusIncludedLaws = [
    'ҚР Конституциясы',
    'ҚР Азаматтық кодексi',
    'ҚР Азаматтық процестік кодексі',
    'ҚР Қылмыстық кодексi',
    'ҚР Қылмыстық-процестік кодексi',
    'ҚР Әкімшілік құқық бұзушылық туралы кодексi',
    'ҚР әкімшілік рәсімдік-процестік кодексі',
    'Отбасы құқығы (таңдау бойынша)',
    'Еңбек құқығы (таңдау бойынша) ',
    'Зияткерлік құқық (таңдау бойынша)',
    'Корпоративтік құқық (таңдау бойынша)'
  ];
  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }

  constructor(
      private modalService: BsModalService,
      private router: Router,
      public authService: AuthService,
      private afs: AngularFirestore,
      private translateService: TranslateService,
      private telegram: TelegramApiService,
      private languageService: LanguageService,
      private paymentService: PaymentService
  ) {
    if (JSON.parse(localStorage.getItem('user'))?.product) {
      this.userProduct = JSON.parse(localStorage.getItem('user')).product;
    }
  }

  ngOnInit(): void {
    this.authService.user$.pipe(take(1)).subscribe(u => {
      this.user = u;
      this.isProductActive = this.user?.expirationDate;
    });
    this.translateService.use('kz');
    this.languageService.getLanguage()
        .subscribe((language) => {
          this.activeLanguage = language;
          if (this.activeLanguage === 'kz') {
            this.instructionLink = 'https://www.youtube.com/watch?v=E0m2Gdr4CYY&t=29s';
          } else {
            this.router.navigate(['/home']);
          }
        });
    this.afs.collection('products').valueChanges().subscribe(resp => {
      this.prod.length = 0;
      resp.forEach((p: IProduct) => {
        this.prod.push({
          id: p.id,
          exam: p.examID
        });
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  public openModal(template: TemplateRef<any>, className?): void {
    if (this.isLoggedIn && this.isProductActive) {
      this.router.navigate(['../account']).then();
    } else {
      this.modalRef = this.modalService.show(template, {class: className ? className : ''});

      this.modalRef.onHidden.pipe(take(1)).subscribe(() => {
        if (this.reserveMode) {
          this.reserveMode = null;
        }
      });
    }
  }

  public openModalSectionInProgress(template: TemplateRef<any>, className?): void {
    if (this.isLoggedIn && (this.userProduct)) {
      this.router.navigate(['../account']).then();
    } else {
      this.modalRef = this.modalService.show(template, {class: className ? className : ''});
    }
  }

  public onBook(): void {
    if (this.isLoggedIn) {
      if (this.user?.product) {
        this.onAccount();
      } else {
        localStorage.setItem('selectedExam', 'product46');
        localStorage.setItem('productID', 'product46');
        localStorage.setItem('paymentStarted', 'true');
        this.router.navigate(['../book']).then();
      }
    } else {
      this.router.navigate(['../book']).then();
    }
  }

  public onSelectExam(id: string): void {
    if (this.isLoggedIn || !this.isLoggedIn && (id.includes('Demo') || id.includes('demo'))) {
      /* TODO: Add exam guard */
      this.modalRef.hide();
      this.router.navigate(['../exam/' + id]).then();
    } else {
      localStorage.setItem('selectedExam', id);
      this.modalService.hide();
      this.showChildModal();
    }
  }

  showChildModal(): void {
    this.childModal?.show();
  }

  hideChildModal(): void {
    this.childModal?.hide();
  }

  public onSelectTest(id: string): void {
    this.modalRef.hide();
    this.router.navigate(['../test/' + id]).then();
  }

  public getBooks(): void {
    this.router.navigate(['../book']).then();
  }

  onCheckout(id: string): void {
    localStorage.setItem('selectedExam', id);
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.router.navigate(['../checkout/' + id]).then();
  }

  onAccount(): void {
    // this.modalRef.hide();
    this.router.navigate(['../account']).then();
  }

  onExamClick(id: string): void {
    const userExams = [];
    const products = [];
    if (this.isLoggedIn && this.userProduct) {
      userExams.push(this.prod.find(i => i.id === this.userProduct).exam);
    }
    this.prod.filter(p => p.exam === id).forEach(i => {
      products.push(i.id);
    });
    if (this.isLoggedIn && !!(userExams.find(i => i === id))) {
      this.onSelectExam(id);
    } else if (this.isLoggedIn && this.userProduct && !!(userExams.find(i => i !== id))) {
      this.onAccount();
    } else if (this.isLoggedIn && !this.userProduct) {
      this.onCheckout(id);
    } else {
      this.onCheckout(id);
      /*this.modalRef.hide();
      this.router.navigate(['../registration']).then();*/
    }
  }

  sendToTelegram(): void {
    if (!this.formName || !this.formNumber) {
      this.showFormError = true;
      setTimeout(() => {
        this.showFormError = false;
      }, 5000);
    } else {
      const order = {
        name: this.formName,
        phone: this.formNumber,
      };
      this.telegram.sendMessage(order).subscribe(() => {
        this.requestToTelegramSent = true;
      });
    }
  }

  onSetReserveMode(mode: number): void {
    this.reserveMode = mode;
  }
}
