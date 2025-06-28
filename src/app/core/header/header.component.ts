import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../shared/services/storage.service';
import {AuthService} from '../../shared/services/auth.service';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  activeLanguage = 'ru';
  navbarOpen = false;
  navItems = [
    {title: 'HOME.PAGE_TITLE', link: '/home'},
    {title: 'EDUCATION.PAGE_TITLE', link: '/education'},
    {title: 'INFO.PAGE_TITLE', link: '/news'},
    {title: 'CONTACTS.PAGE_TITLE', link: '/contacts'},
    {title: 'LOGIN.PAGE_TITLE', link: '/account'},
  ];

  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private storageService: StorageService,
    public authService: AuthService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.onChangeLanguage(window.location.href.includes('memtest') ? 'kz' : 'ru');
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  isActiveLink(link): boolean {
    return this.router.url.includes(link);
  }

  onChangeLanguage(language: string): void {
    if (this.router.url.includes('/news/')){
      this.router.navigate(['../news']);
    }
    this.languageService.setLanguage(language);
    this.activeLanguage = language;
    this.translateService.use(language);
    this.storageService.setStorageItem({
      key: 'lang',
      value: language,
      storageArea: 'sessionStorage'
    });
  }
}
