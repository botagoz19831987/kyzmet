import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.less']
})
export class BottomSectionComponent implements OnInit {
  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }
  activeLanguage = 'ru';
  navbarOpen = false;
  navItems = [
    {title: 'HOME.PAGE_TITLE', link: '/home'},
    {title: 'EDUCATION.PAGE_TITLE', link: '/education'},
    {title: 'INFO.PAGE_TITLE', link: '/news'},
    {title: 'LOGIN.PAGE_TITLE', link: '/account'},
    {title: 'PUBLIC_OFFER_AGREEMENT.PAGE_TITLE', link: '/public-offer-agreement'},
    {title: 'PRIVACY_POLICY.PAGE_TITLE', link: '/privacy-policy'},
    {title: 'PAYMENTS.PAGE_TITLE', link: '/payments'},
    {title: 'CONTACTS.PAGE_TITLE', link: '/contacts'}
  ];

  constructor(
    private router: Router,
    public authService: AuthService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  isActiveLink(link): boolean {
    return link === this.router.url;
  }

  onChangeLanguage(language: string): void {
    this.activeLanguage = language;
    this.translateService.use(language);
  }
}
