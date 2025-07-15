import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {PlyrComponent} from 'ngx-plyr';
import * as Plyr from 'plyr';
import {IVideo} from '../shared/models/video.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../shared/services/user.service';
import {LanguageService} from '../shared/services/language.service';
import {IProduct} from '../shared/models/product.model';
import { filter, take, takeUntil } from 'rxjs/operators';
import {titles} from '../../assets/audio/audio-titles';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as dayjs from 'dayjs';
import {IUser} from '../shared/models/user.model';
import {AuthService} from '../shared/services/auth.service';
import {forkJoin, Subject} from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectLawsModalComponent } from '../modals/select-laws-modal/select-laws-modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  @ViewChild('videoGridKz', { static: true }) videoGridKz: ElementRef;
  @ViewChild('videoGridRu', { static: true }) videoGridRu: ElementRef;
  @ViewChild('lawSelectionModal') lawSelectionModal!: TemplateRef<any>;
  modalRef?: BsModalRef;
  isLoading = true;
  @ViewChild(PlyrComponent)
  public plyr: PlyrComponent;
  public player: Plyr;
  public video: IVideo[] = [
    {
      kz: {
        url: 'AUEMynGIIg4',
        title: 'Конституция',
      },
      ru: {
        url: 'jy51DoGvd-U',
        title: 'Конституция',
      },
    },
    {
      kz: {
        url: 'CWBIiniCRWQ',
        title: 'О государственной службе',
      },
      ru: {
        url: 'I7bEPEvrtUM',
        title: 'О государственной службе',
      },
    }
  ];
  public audio = {
    kz: [
      [
        {
          title: 'Административный процедурно-процессуальный кодекс',
          src: '../../assets/audio/kz/8.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Конституция',
          src: '../../assets/audio/kz/1.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О государственной службе',
          src: '../../assets/audio/kz/4.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О государственных услугах',
          src: '../../assets/audio/kz/7.mp3',
          type: 'audio/mp3'
        }
      ]
    ],
    ru: [
      [
        {
          title: 'Административный процедурно-процессуальный кодекс',
          src: '../../assets/audio/ru/8.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Конституция',
          src: '../../assets/audio/ru/1.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О государственной службе',
          src: '../../assets/audio/ru/4.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О государственных услугах',
          src: '../../assets/audio/ru/7.mp3',
          type: 'audio/mp3'
        }
      ]
    ]
  };
  public activeSection: 'video' | 'audio' | 'test' | 'books' = 'audio';
  public activeLanguage = 'ru';
  public booksRu = [];
  public booksKz = [];
  public lawsRu = [];
  public lawsKz = [];

  public boughtItem;
  public boughtProdInfo = [];
  isProductExpired: boolean;
  mainExamId: string;
  public exams = [];
  public currentProduct = 1;
  public request = JSON.parse(localStorage.getItem('user')).request;
  private user: any;

  isAudioPresent: boolean;
  isVideoPresent: boolean;
  isLawsPresent: boolean;
  isJudicialCorp: boolean;

  destroy$ = new Subject();

  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private languageService: LanguageService,
    private authService: AuthService,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit(): void {
    // this.authService.setUserToData();
    this.authService.user$.pipe(takeUntil(this.destroy$), filter(a => Boolean(a))).subscribe(u => {
      if (u?.uid) {
        this.user = u;
        this.boughtItem = this.user.product;
        this.isJudicialCorp = ['product43', 'product44', 'product45'].includes(this.user.product);
        this.onProductExpirationCheck(this.user);
        this.preparingProdData(this.user.product);
        if (this.isJudicialCorp && !this.user?.selectedLaws) {
          setTimeout(() => {
            this.openModal();
          }, 100);
        }
      } else {
        console.log('no user');
      }
    });

    this.languageService.getLanguage()
      .subscribe((language) => {
        this.activeLanguage = language;
      });

    this.afs.collection('products')
        .get()
        .subscribe(res => {
          const array = [];
          res.forEach((p: any) => {
            array.push(p.data());
          });

          const result = array.filter(item => {
            return item.video?.some(video => video.kz === 'pvv3SVGbEQE');
            /*return item.video?.some(video => video.kz === 'NgDXyVSO6Sk');*/
          });
        });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  openModal(): void {
    this.modalRef = this.modalService.show(SelectLawsModalComponent, { keyboard: false, ignoreBackdropClick: true, class: 'modal-dialog-centered', id: 1 });
  }

  preparingProdData(prod?): void {
    if (prod) {
      this.boughtItem = prod;
      /*this.onSetExpirationDate(this.boughtItem, userData);*/
    }
    this.afs.collection('products').valueChanges().pipe(take(1)).subscribe(resp => {
      resp.forEach((p: IProduct) => {
        if (this.boughtItem === p.id) {
          this.booksRu = p.books?.ru;
          this.booksKz = p.books?.kz;
          this.lawsRu = p.laws?.ru;
          this.lawsKz = p.laws?.kz;
          this.generateVideo(p.video);
          this.boughtProdInfo.push(p);
          this.isVideoPresent = !!p.video?.length;
          this.isAudioPresent = !!p.audio?.length;
          this.activeSection = window.innerWidth > 576
              ? !this.isVideoPresent && !this.isAudioPresent ? 'books' : 'audio'
              : 'test';
          !this.booksRu?.length && !this.booksKz?.length && this.lawsRu?.length && this.lawsKz?.length ? this.isLawsPresent = true : this.isLawsPresent = false;
          this.afs
            .collection('exams')
            .doc(p.examID)
            .get()
            .pipe(take(1))
            .subscribe(ex => {
              const exData = ex.data();
              if (!exData?.innerExams) {
                this.exams.push(exData);
              } else {
                this.mainExamId = exData.id;
                const examObservables = exData.innerExams.map(id =>
                    this.afs.collection('exams').doc(id).get().pipe(take(1))
                );

                forkJoin(examObservables).subscribe(exams => {
                  console.log(exams);
                  this.exams = exams.map(doc => (doc as any).data());
                  console.log(this.exams);
                });
              }
            });
        }
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  onUpdateAudioSource(str: string): any {
    return (str.includes('src/assets') ? str.replace('src/assets', 'assets') : str);
  }

  getProductByExamId(id): any {
    if (this.exams.length > 1) {
      return this.boughtProdInfo.find(i => i.examID === this.mainExamId);
    } else {
      return this.boughtProdInfo.find(i => i.examID === id);
    }
  }

  getAudioTitle(path: string): string {
    const fileName = path[this.activeLanguage].replace(/^.*[\\\/]/, '').replace('.mp3', '');
    return titles[this.activeLanguage].find(i => i.key === fileName).value;
  }

  /*onGetBookUrl(book, lang): string {
    let source = '../../assets/books/' + lang + '/';
    if (lang === 'ru') {
      if (book.toLowerCase().includes('госслужбу')) {
        source += '1.pdf';
      }
      if (book.toLowerCase().includes('олк')) {
        source += '2.pdf';
      }
      if (book.toLowerCase().includes('цон')) {
        source += '3.pdf';
      }
      if (book.toLowerCase().includes('корпус')) {
        source += '4.pdf';
      }
    } else {
      if (book.toLowerCase().includes('емлекеттік')) {
        source += '1.pdf';
      }
      if (book.toLowerCase().includes('өтуге')) {
        source += '2.pdf';
      }
      if (book.toLowerCase().includes('цон')) {
        source += '3.pdf';
      }
      if (book.toLowerCase().includes('корпус')) {
        source += '4.pdf';
      }
    }
    return source;
    /!*
   1 - Как_легко_сдать_тесты_на_госслужбу_2022_рус
   2 - Как_пройти_ОЛК_тестирование_2022_рус
   3 - Как_сдать_тесты_в_ЦОН_2022_рус
   4 - КОРПУС_А_книга_для_руководителя_2022_рус

   4 - А_КОРПУСЫ_басшыға_арналған_кітап_2022_каз
   3 - ХҚКО_(ЦОН)_тестті_қалай_тапсыруға_болады_2022_каз
   2 - ЖҚБ_тестілеуден_қалай_өтуге_болады_2022_каз
   1-  Мемлекеттік_қызмет_тесттерін_оңай_тапсыру_2022_каз
   *!/
  }*/

  public played(event: Plyr.PlyrEvent): void {
    console.log('played', event);
  }

  public onChangeSection(section: 'video' | 'audio' | 'test' | 'books'): void {
    this.activeSection = section;
  }

  generateVideo(videos): void {
    if (videos) {
      videos.map((video) => {
        const iframe = this.generateIframe(video.kz, video.ru);
        this.videoGridRu.nativeElement.appendChild(iframe[0]);
        this.videoGridKz.nativeElement.appendChild(iframe[1]);
      });
    }
  }

  generateIframe(kz, ru): HTMLElement[] {
    const iframeRu = document.createElement('iframe');
    const iframeKz = document.createElement('iframe');
    iframeRu.src = `'https://www.youtube.com/embed/${ru}'`;
    iframeKz.src = `'https://www.youtube.com/embed/${kz}'`;
    iframeRu.srcdoc = `${this.generateSrcDoc(ru)}`;
    iframeKz.srcdoc = `${this.generateSrcDoc(kz)}`;
    iframeRu.allow = iframeKz.allow = 'accelerometer; autoplay;' +
      ' clipboard-write; encrypted-media; ' +
      'gyroscope; picture-in-picture';
    iframeRu.allowFullscreen = iframeKz.allowFullscreen = true;
    iframeRu.width = iframeKz.width = '360';
    iframeRu.height = iframeKz.height = '202';
    return [iframeRu, iframeKz];
  }

  generateSrcDoc(url): string {
    return '<style>' +
      `*{padding:0;margin:0;overflow:hidden}` +
      'html,body{height:100%}' +
      'img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}' +
      'span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white}' +
      'svg{opacity: .8}' +
      'div:hover svg{transform: scale(1.2); transition-duration: .3s}}' +
      '</style>' +
      '<div class="container">' +
      `<a href=https://www.youtube.com/embed/${url}?autoplay=1>` +
      `<img src=https://img.youtube.com/vi/${url}/hqdefault.jpg alt='video-img'>` +
      '<span> ' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n' +
      '  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n' +
      '</svg>' +
      '</span>' +
      '</a>' +
      '</div>';
  }

  checkStatus(): void {
    this.userService.getDetails(JSON.parse(localStorage.getItem('user')).id).subscribe(resp => {
      if (resp.data().product) {
        localStorage.setItem('user', JSON.stringify(resp.data()));
      } else {
        alert('Ваша заявка все еще находится в обработке');
      }
    });
  }

  onChangeProduct(index: number): void {
    this.currentProduct = index;
  }

  /*onSetBuyingProduct(): void {
    const userPayData = JSON.parse(localStorage.getItem('userPayData'));
    // testing keys
    /!*const appId = 'DUQ_MrI71MobYq5n1gGquNuhqog6h4KU';
    const secretId = 'YPu6Fj0KFXUDWFK56ZGhjHo1T1T9ohjD';*!/
    // prod keys
    const appId = 'CiKD0u47a_QhpZgnn3-j682OPEh0_8vc';
    const secretId = 'yxG42Ohh91K_WQXD1Oi41aY0QvzlGb41';
    const authorizationData = 'Basic ' + btoa( appId + ':' + secretId);
    // testing endpoint
    /!*const url = `https://cards-stage.pitech.kz/gw/payments?ordersId=${userPayData.ordersId}&uuid=${userPayData.uuid}&orderDate=${userPayData.orderDate}`;*!/
    const url = `https://cards.pitech.kz/gw/payments?ordersId=${userPayData.ordersId}&uuid=${userPayData.uuid}&orderDate=${userPayData.orderDate}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: authorizationData
      })
    };
    this.http.get<any>(url, httpOptions).subscribe(response => {
      if (response.state === 'SUCCESS') {
        this.afs
          .collection('users')
          .doc(response.extClientRef)
          .get()
          .subscribe(resp => {
            const userData = JSON.parse(JSON.stringify(resp.data()));
            userData.product = response.payload.data;
            this.afs
              .collection('users')
              .doc(response.extClientRef)
              .set(userData)
              .then(() => {
                localStorage.removeItem('userPayData');
                this.preparingProdData(response.payload.data, userData);
              });
          });
      } else {
        this.preparingProdData();
      }
    });
  }*/

  /*onSetExpirationDate(product, userData): void {
    this.afs.collection('products')
      .doc(product)
      .get()
      .subscribe(res => {
        const data = res.data();
        const duration = data.duration;
        const expDate = dayjs().add(duration, 'days').format('YYYY-MM-DDTHH:mm');
        userData.expirationDate = expDate;
        this.afs
          .collection('users')
          .doc(userData.uid)
          .set(userData)
          .then(() => {
              localStorage.setItem('user', JSON.stringify(userData));
          });
        });
  }*/

  onProductExpirationCheck(user: IUser): void {
    const userData = user;
    const currentMoment = dayjs();
    if (!!userData.expirationDate) {
      const expDate = dayjs(userData.expirationDate);
      if (expDate.isBefore(currentMoment)) {
        // userData.product = null;
        userData.expirationDate = null;
        this.afs
          .collection('users')
          .doc(userData.uid)
          .set(userData)
          .then(() => {
            localStorage.setItem('user', JSON.stringify(userData));
            this.authService.user$.next(userData);
            // this.authService.logout();
          });
      }
    }

    this.isProductExpired = !!userData.expirationDate;
  }

  public readonly window = window;
}
