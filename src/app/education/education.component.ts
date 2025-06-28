import {
  Component,
  ElementRef,
  OnInit, Renderer2,
  ViewChild,
} from '@angular/core';
import {IVideo} from '../shared/models/video.model';
import {PlyrComponent} from 'ngx-plyr';
import * as Plyr from 'plyr';
import {Observable} from 'rxjs';
import {filter, pluck} from 'rxjs/operators';
import {StorageService} from '../shared/services/storage.service';
import {AuthService} from '../shared/services/auth.service';
import {LanguageService} from '../shared/services/language.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @ViewChild('videoGridKz', {static: true}) videoGridKz: ElementRef<HTMLElement>;
  @ViewChild('videoGridRu', {static: true}) videoGridRu: ElementRef<HTMLElement>;
  @ViewChild('loginFormModal', {static: true}) loginFormModal: ElementRef;
  isLoading = true;
  public activeLanguage = 'ru';
  public plyr: PlyrComponent;
  public player: Plyr;
  isUserLoggedIn: boolean;
  public video: IVideo[] = [
    {
      kz: {
        url: 'fTHtnuTd6og',
        title: 'Конституция',
      },
      ru: {
        url: 'bvlbYmHMQlQ',
        title: 'Конституция',
      },
    },
    {
      kz: {
        url: 'jirUQzZpH_A',
        title: 'Мемлекеттік қызмет туралы',
      },
      ru: {
        url: 'ZQvje9lqCfA',
        title: 'О государственной службе',
      },
    },
    {
      kz: {
        url: 'UkgH5FoxHt4',
        title: 'Қазақстан Республикасындағы жергілікті мемлекеттік басқару және өзін-өзі басқару туралы',
      },
      ru: {
        url: 'A4c92zMZOOA',
        title: 'О местном государственном управлении и самоуправлении в РК',
      },
    },
    {
      kz: {
        url: 'iM4mDhQJ69g',
        title: 'Мемлекеттік қызметтер туралы',
      },
      ru: {
        url: '4EMe1mF1tFY',
        title: 'О государственных услугах',
      },
    },
    {
      kz: {
        url: 'VyfrQq6t54I',
        title: 'Қазақстан Республикасының Үкіметі туралы',
      },
      ru: {
        url: '6WkoxqTLBmw',
        title: 'О Правительстве Республики Казахстан',
      },
    },
    {
      kz: {
        url: 'dcdnzftgknU',
        title: 'Құқықтық актілер туралы',
      },
      ru: {
        url: 'z-QNuq966Oc',
        title: 'О правовых актах',
      },
    },
    {
      kz: {
        url: '0OW6rq5Qhuw',
        title: 'Қазақстан Республикасының Президенті туралы',
      },
      ru: {
        url: 'HdTn0Z-fGRY',
        title: 'О Президенте Республики Казахстан',
      },
    },
    {
      kz: {
        url: 'Z3eqYbPcFME',
        title: 'Сыбайлас жемқорлыққа қарсы күрес',
      },
      ru: {
        url: 'AG_IGFjkGJ8',
        title: 'О противодействии коррупции',
      },
    },
    {
      kz: {
        url: 'pvv3SVGbEQE',
        title: 'Қазақстан Республикасы мемлекеттік қызметшілерінің этикалық кодексі',
      },
      ru: {
        url: 'dh7zXHn6TEI',
        title: 'Этический кодекс госслужащих Республики Казахстан',
      },
    },
    {
      kz: {
        url: 'd-iy7gOmXBk',
        title: 'Жеке деректер және оларды қорғау туралы',
      },
      ru: {
        url: 'xEc9eefbCig',
        title: 'О персональных данных и их защите',
      },
    },
    {
      kz: {
        url: 'cQrT1va9YSc',
        title: 'Қазақстан Республикасының Парламенті және оның депутаттарының мәртебесі туралы',
      },
      ru: {
        url: 'mlyJG-52Nf4',
        title: 'О Парламенте Республики Казахстан и статусе его депутатов',
      },
    },
    {
      kz: {
        url: 'gT7U8IaCAyw',
        title: 'Акционерлік қоғамдар туралы',
      },
      ru: {
        url: '8O5iOIcPfPk',
        title: 'Об акционерных обществах',
      },
    },
    {
      kz: {
        url: 'c2rAnW5x63E',
        title: 'Құқық қорғау қызметі туралы',
      },
      ru: {
        url: 'PN0hxXk83gU',
        title: 'О правоохранительной службе',
      },
    },
    {
      kz: {
        url: 'LdMo5lnJbgM',
        title: 'Әкімшілік іс жүргізу кодексі',
      },
      ru: {
        url: 'Fg5pf6IALBU',
        title: 'Административный процедурно-процессуальный кодекс',
      },
    }
  ];
  public audio = {
    kz: [
      [
        {
          title: 'Конституция',
          src: '../../assets/audio/kz/1.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Әкімшілік іс жүргізу кодексі',
          src: '../../assets/audio/kz/8.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Мемлекеттік қызмет туралы',
          src: '../../assets/audio/kz/4.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Мемлекеттік қызметтер туралы',
          src: '../../assets/audio/kz/7.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Қазақстан Республикасындағы жергілікті мемлекеттік басқару және өзін-өзі басқару туралы',
          src: '../../assets/audio/kz/10.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Қазақстан Республикасының Парламенті және оның депутаттарының мәртебесі туралы',
          src: '../../assets/audio/kz/11.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Жеке деректер және оларды қорғау туралы',
          src: '../../assets/audio/kz/12.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Қазақстан Республикасының Үкіметі туралы',
          src: '../../assets/audio/kz/3.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Құқықтық актілер туралы',
          src: '../../assets/audio/kz/6.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Құқық қорғау қызметі туралы',
          src: '../../assets/audio/kz/13.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Қазақстан Республикасының Президенті туралы',
          src: '../../assets/audio/kz/2.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Сыбайлас жемқорлыққа қарсы күрес',
          src: '../../assets/audio/kz/5.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Акционерлік қоғамдар туралы 2022 ж',
          src: '../../assets/audio/kz/14.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Қазақстан Республикасы мемлекеттік қызметшілерінің этикалық кодексі',
          src: '../../assets/audio/kz/9.mp3',
          type: 'audio/mp3'
        }
      ]
    ],
    ru: [
      [
        {
          title: 'Конституция',
          src: '../../assets/audio/ru/1.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Административный процедурно-процессуальный кодекс',
          src: '../../assets/audio/ru/8.mp3',
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
      ],
      [
        {
          title: 'О местном государственном управлении и самоуправлении в РК',
          src: '../../assets/audio/ru/10.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О Парламенте Республики Казахстан и статусе его депутатов',
          src: '../../assets/audio/ru/11.m4a',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О персональных данных и их защите',
          src: '../../assets/audio/ru/12.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О Правительстве Республики Казахстан',
          src: '../../assets/audio/ru/3.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О правовых актах',
          src: '../../assets/audio/ru/6.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О правоохранительной службе',
          src: '../../assets/audio/ru/13.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О Президенте Республики Казахстан',
          src: '../../assets/audio/ru/2.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'О противодействии коррупции',
          src: '../../assets/audio/ru/5.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Об акционерных обществах 2022',
          src: '../../assets/audio/ru/14.mp3',
          type: 'audio/mp3'
        }
      ],
      [
        {
          title: 'Этический кодекс госслужащих Республики Казахстан',
          src: '../../assets/audio/ru/9.mp3',
          type: 'audio/mp3'
        }
      ]
    ]
  };
  public activeSection: 'video' | 'audio' = 'video';

  language$: Observable<string>;
  constructor(
    private storageService: StorageService,
    public authService: AuthService,
    private languageService: LanguageService,
    private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.language$ = this.storageService.storageChange$.pipe(
      filter(({storageArea}) => storageArea === 'sessionStorage'),
      filter(({key}) => key === 'lang'),
      pluck('value')
    );
    this.isUserLoggedIn = !!JSON.parse(localStorage.getItem('user'));
    this.languageService.getLanguage()
      .subscribe((language) => {
        this.activeLanguage = language;
      });
    this.video.forEach((video, i) => {
     const iframe = this.generateIframe(video.kz, video.ru, i);
     const wrapRu = document.createElement('div');
     const wrapKz = document.createElement('div');
     wrapRu.className = wrapKz.className = 'wrap';
     wrapRu.style.cssText = wrapKz.style.cssText = 'position: relative';
     wrapRu.appendChild(iframe[0]);
     wrapKz.appendChild(iframe[1]);
     this.videoGridRu.nativeElement.appendChild(wrapRu);
     this.videoGridKz.nativeElement.appendChild(wrapKz);

     if (i > 0) {
       const overlayRu = document.createElement('div');
       const overlayKz = document.createElement('div');
       overlayRu.style.cssText = overlayKz.style.cssText = 'background: transparent;' +
         'height: 202px;' +
         'width: 360px;' +
         'position: absolute;' +
         'top: 0;' +
         'cursor: pointer';
       wrapRu.appendChild(overlayRu);
       wrapKz.appendChild(overlayKz);
       this.renderer.listen(overlayRu, 'click', () => {
         this.openModal(i, this.loginFormModal);
       });
       this.renderer.listen(overlayKz, 'click', () => {
         this.openModal(i, this.loginFormModal);
       });
     }
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  public played(event: Plyr.PlyrEvent): void {
    console.log('played', event);
  }

  public onChangeSection(section: 'video' | 'audio'): void {
    this.activeSection = section;
  }

  public openModal(i, item): void {
    if (i > 0) {
      item.show();
    }
  }

  generateIframe(kz, ru, i): HTMLElement[] {
    const iframeRu = document.createElement('iframe');
    const iframeKz = document.createElement('iframe');
    iframeRu.src = `'https://www.youtube.com/embed/${ru.url}'`;
    iframeKz.src = `'https://www.youtube.com/embed/${kz.url}'`;
    iframeRu.title = `${ru.title}`;
    iframeKz.title = `${kz.title}`;
    iframeRu.srcdoc = `${this.generateSrcDoc(ru.url, ru.title, i)}`;
    iframeKz.srcdoc = `${this.generateSrcDoc(kz.url, kz.title, i)}`;
    iframeRu.allow = iframeKz.allow = 'accelerometer; autoplay;' +
      ' clipboard-write; encrypted-media; ' +
      'gyroscope; picture-in-picture';
    iframeRu.allowFullscreen = iframeKz.allowFullscreen = true;
    iframeRu.width = iframeKz.width = '360';
    iframeRu.height = iframeKz.height = '202';
    return [iframeRu, iframeKz];
  }

  generateSrcDoc(url, title, i): string {
    const disable = !this.isUserLoggedIn && i > 0
      ? '.container{pointer-events: none;opacity: .5}' + 'body{cursor: pointer}'
      : '';
    return '<style>' +
      `*{padding:0;margin:0;overflow:hidden}` +
      'html,body{height:100%}' +
      `${disable}` +
      'img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}' +
      'span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white}' +
      'svg{opacity: .8}' +
      'div:hover svg{transform: scale(1.2); transition-duration: .3s}}' +
      '</style>' +
      '<div class="container">' +
      `<a href=https://www.youtube.com/embed/${url}?autoplay=1>` +
      `<img src=https://img.youtube.com/vi/${url}/hqdefault.jpg alt=${title}>` +
      '<span> ' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n' +
      '  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n' +
      '</svg>' +
      '</span>' +
      '</a>' +
      '</div>';
  }
}
