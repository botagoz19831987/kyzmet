import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EducationComponent} from './education/education.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AccountComponent} from './account/account.component';
import {NewsComponent} from './news/news.component';
import {NewsListComponent} from './news/news-list/news-list.component';
import {NewsDetailsComponent} from './news/news-details/news-details.component';
import {TestComponent} from './components/test/test.component';
import {ExamComponent} from './components/exam/exam.component';
import {BookComponent} from './components/book/book.component';
import {PublicOfferAgreementComponent} from './public-offer-agreement/public-offer-agreement.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginGuard} from './shared/guards/login.guard';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PaymentsComponent} from './payments/payments.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from './shared/guards/admin.guard';
import {PaymentResponseComponent} from './payments/payment-response/payment-response.component';
import {MemtestComponent} from './memtest/memtest.component';
import {ExamGuard} from "./shared/guards/exam.guard";

export const routes: Routes = [
  {path: '#', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'memtest', component: MemtestComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'test', children: [
      {path: '', redirectTo: '/account', pathMatch: 'full'},
      {path: ':id', component: TestComponent},
    ]
  },
  {
    path: 'exam', children: [
      {path: '', redirectTo: '/account', pathMatch: 'full'},
      {path: ':id', component: ExamComponent, canActivate: [ExamGuard]},
    ]
  },
  {
    path: 'news', component: NewsComponent, data: {PageName: 'News'}, children: [
      {path: '', component: NewsListComponent, data: {PageName: 'News list'}},
      {path: ':id', component: NewsDetailsComponent, data: {pageName: 'News Item'}},
    ]
  },
  {
    path: 'checkout', children: [
      {path: '', redirectTo: '/account', pathMatch: 'full'},
      {path: ':id', component: CheckoutComponent},
    ]
  },
  {path: 'book', component: BookComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registration', component: RegistrationComponent, canActivate: [LoginGuard]},
  {path: 'public-offer-agreement', component: PublicOfferAgreementComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'payment-response', component: PaymentResponseComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
