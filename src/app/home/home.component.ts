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
import {
  headOfEducationalOrganizationFirst,
} from '../components/exam/exams/head-of-educational-organization-first';
import {judicialCorp} from '../components/exam/exams/judicial-corp';
import {privateBailiffExam} from '../components/exam/exams/private-bailiff';
import {TelegramApiService} from '../shared/services/telegram-api.service';
import {take} from 'rxjs/operators';
import {PaymentService} from '../shared/services/payment.service';
import { headOfEducationalOrganizationSecond } from '../components/exam/exams/head-of-educational-organization-second';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public activeLanguage = 'ru';
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
  prod: any[] = [];
  user;
  instructionLink = '';

  formName = '';
  formNumber = '';
  showFormError = false;
  requestToTelegramSent = false;

  isProductActive: any;
  userProduct: any;

  reserveMode = null;

  notariatIncludedLaws = [
  'Гражданский кодекс РК',
  'Земельный кодекс РК',
  'Кодекс «О браке (супружестве) и семье»',
  'Административный процедурно-процессуальный кодекс',
  'Закон «О противодействии коррупции»',
  'Закон «О государственной регистрации прав на недвижимое имущество»',
  'Закон «О жилищных отношениях»',
  'Закон «О нотариате»',
  'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»',
  ];
  advocacyIncludedLaws = [
    'Гражданский кодекс РК',
    'Гражданский процессуальный кодекс РК',
    'Уголовный кодекс РК',
    'Уголовно-процессуальный кодекс РК',
    'Кодекс РК об административных правонарушениях',
    'Закон «О противодействии коррупции»',
    'Административный процедурно-процессуальный кодекс',
    'Закон «Об адвокатской деятельности и юридической помощи»',
    'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»',
  ];
  bailiffIncludedLaws = [
    'Об исполнительном производстве и статусе судебных исполнителей',
    'Административный процедурно-процессуальный кодекс',
    'Гражданский кодекс РК',
    'Гражданский процессуальный кодекс РК',
    'Уголовный кодекс РК',
    'Уголовно-процессуальный кодекс РК',
    'Кодекс РК об административных правонарушениях',
    'Кодекс «О браке (супружестве) и семье»'
  ];
  headOfEducationalOrganizationFirstIncludedLaws = [
    'Трудовой кодекс Республики Казахстан',
    'Закон «Об образовании»',
    'Закон «О противодействии коррупции»',
    'Закон «О статусе педагога»',
    'Приказ Министра просвещения РК от 3 августа 2022 года № 348',
    'Приказ Министра просвещения РК от 31 августа 2022 года № 385'
];
  headOfEducationalOrganizationSecondIncludedLaws = [
    'Закон «О статусе педагога»',
    'Закон «Об образовании»',
    'Закон «О противодействии коррупции»',
    'Приказ Министра просвещения РК от 3 августа 2022 года № 348',
    'Кодекс о браке (супружестве) и семье',
    'Трудовой кодекс Республики Казахстан',
    'Закон «О правах ребенка в РК»',
];
  judicialcorpusIncludedLaws = [
    'Конституция РК',
    'Гражданский кодекс РК',
    'Гражданский процессуальный кодекс РК',
    'Уголовный кодекс РК',
    'Уголовно-процессуальный кодекс РК',
    'Кодекс РК об административных правонарушениях',
    'Административный процедурно-процессуальный кодекс',
    'Семейное право (на выбор)',
    'Трудовое право (на выбор)',
    'Интеллектуальное право (на выбор)',
    'Корпоративное право (на выбор)',
  ];

  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }

  constructor(
    private modalService: BsModalService,
    private router: Router,
    public authService: AuthService,
    private afs: AngularFirestore,
    private languageService: LanguageService,
    private telegram: TelegramApiService,
  ) {}

  ngOnInit(): void {
    this.authService.user$.pipe(take(1)).subscribe(u => {
      this.user = u;
      this.isProductActive = this.user.expirationDate;
      this.userProduct = this.user.product;
    });

    this.languageService.getLanguage()
      .subscribe((language) => {
        this.activeLanguage = language;
        if (this.activeLanguage === 'ru') {
          this.instructionLink = 'https://www.youtube.com/watch?v=FcWrsHWiD38';
        } else {
          this.router.navigate(['/memtest']);
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

  public openModal(template: TemplateRef<any>, className?, mode?: number): void {
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
      if (this.user.product) {
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
    } else if (this.isLoggedIn && this.isProductActive && !!(userExams.find(i => i !== id))) {
      this.onAccount();
    } else if (this.isLoggedIn && !this.isProductActive) {
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
      this.requestToTelegramSent = true;
      this.telegram.sendMessage(order).subscribe(() => {
        this.requestToTelegramSent = true;
      });
    }
  }

  onSetReserveMode(mode: number): void {
    this.reserveMode = mode;
  }
}
