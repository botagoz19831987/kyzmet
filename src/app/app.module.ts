import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MissingTranslationService} from './core/missing-translation.service';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {EducationComponent} from './education/education.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import {NewsListComponent} from './news/news-list/news-list.component';
import {NewsDetailsComponent} from './news/news-details/news-details.component';
import {TestComponent} from './components/test/test.component';
import {ExamComponent} from './components/exam/exam.component';
import {CountdownModule} from 'ngx-countdown';
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {BookComponent} from './components/book/book.component';
import {PublicOfferAgreementComponent} from './public-offer-agreement/public-offer-agreement.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {SafePipe} from './shared/pipes/safe.pipe';
import {PlyrModule} from 'ngx-plyr';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {RegistrationComponent} from './registration/registration.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PaymentsComponent} from './payments/payments.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {LogginModalComponent} from './modals/loggin-modal/loggin-modal.component';
import {BookModalComponent} from './modals/book-modal/book-modal.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AdminComponent} from './admin/admin.component';
import {PreloaderComponent} from './components/preloader/preloader.component';
import {SharedModule} from './shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { PaymentResponseComponent } from './payments/payment-response/payment-response.component';
import { MemtestComponent } from './memtest/memtest.component';
import { SelectLawsModalComponent } from './modals/select-laws-modal/select-laws-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    EducationComponent,
    ContactsComponent,
    AccountComponent,
    LoginComponent,
    RegistrationComponent,
    TestComponent,
    ExamComponent,
    BookComponent,
    PublicOfferAgreementComponent,
    PrivacyPolicyComponent,
    SafePipe,
    PaymentsComponent,
    LogginModalComponent,
    BookModalComponent,
    CheckoutComponent,
    AdminComponent,
    PreloaderComponent,
    PaymentResponseComponent,
    MemtestComponent,
    SelectLawsModalComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: MissingTranslationService
            },
            useDefaultLang: false
        }),
        CountdownModule,
        NgImageSliderModule,
        PlyrModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BsDropdownModule,
        NgxJsonViewerModule,
        SharedModule,
        NgxPaginationModule,
        FormsModule
    ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

