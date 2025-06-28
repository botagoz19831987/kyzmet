import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';
import {take} from 'rxjs/operators';
import {IProduct} from '../shared/models/product.model';
import {BooksPipe} from '../shared/pipes/books.pipe';
import {TelegramApiService} from '../shared/services/telegram-api.service';
import {AuthService} from '../shared/services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LanguageService} from '../shared/services/language.service';
import {PaymentService} from '../shared/services/payment.service';
import * as dayjs from 'dayjs';
declare var cp: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }
  public requestedProducts: IProduct[] = [];
  public books: string[] = [];
  public selectedLanguage: 'ru' | 'kz' = 'ru';
  public booksRu: string[] = [];
  public booksKz: string[] = [];

  isLawsPresent: boolean;
  isAudioPresent: boolean;
  isVideoPresent: boolean;

  id: string;

  user!: any;
  products: any[] = [];

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private booksPipe: BooksPipe,
    private router: Router,
    private telegram: TelegramApiService,
    private http: HttpClient,
    private languageService: LanguageService,
    private paymentService: PaymentService
  ) {
    this.languageService.getLanguage()
      .subscribe((language) => {
        this.selectedLanguage = language;
      });
    let requestedProduct: string;
    this.activatedRoute.params.subscribe(params => {
      requestedProduct = params.id;
      this.id = requestedProduct;
      this.onGetProduct(requestedProduct).subscribe(res => {
        this.requestedProducts = res;
        this.requestedProducts.map(prod => {
          if (prod?.books && prod.books?.ru?.length) {
            prod.books.ru.map((el: any) => {
              const book = this.booksPipe.transform(el.name);
              if (!this.booksRu.includes(book)) {
                this.booksRu.push(book);
              }
            });
          }
          if (prod?.books && prod.books?.kz?.length) {
            prod.books.kz.map((el: any) => {
              const book = this.booksPipe.transform(el.name);
              if (!this.booksKz.includes(book)) {
                this.booksKz.push(book);
              }
            });
          }
          if (prod.laws?.ru.length && prod.laws?.kz.length) {
            this.isLawsPresent = true;
          }
          if (prod.audio?.length) {
            this.isAudioPresent = true;
          }
          if (prod.video?.length) {
            this.isVideoPresent = true;
          }
        });
      });
    });
  }
  onGetProduct(id: string): any {
    return this.afs.collection('products', ref =>
      ref.where('examID', '==', id))
      .valueChanges()
      .pipe(
      take(3)
    );
  }

  onProgramSelect(id: string, price: number): void {
    if (this.isLoggedIn) {
      // this.sendToTelegram(id);
      this.onBuyProduct(id, price);
    } else {
      localStorage.setItem('productID', id);
      this.router.navigate(['../registration']).then();
    }
  }

  replaceDoc(str): string {
    if (str.includes('2024')) {
      return str.replace('.pdf', '').replace(' 2024 рус', '').replace(' 2024 каз', '');
    } else {
      return str.replace('.pdf', '');
    }
  }

  onBuyProduct(id: string, price: number): void {
    localStorage.setItem('productID', id);
    localStorage.setItem('paymentStarted', 'true');

    this.openPaymentWidget(price, id);
  }

  openPaymentWidget(productPrice: number, productId: string): void {
    const widget = new cp.CloudPayments();
    widget.pay('charge',
      {
        publicId: 'pk_e673153f8113d0219f4fca69b6fb1',
        description: 'Оплата товаров в kyzmet.kz',
        amount: productPrice,
        currency: 'KZT',
        accountId: this.authService.userData.id,
        email: this.authService.userData.email,
        skin: 'mini',
        autoClose: 1,
        data: {
          cloudPayments: {
            CustomerReceipt: {
              Items: [
                {
                  label: `Пакет ${productId}`,
                  price: productPrice,
                  quantity: 1,
                  amount: productPrice,
                  vat: null,
                  object: 4,
                  method: 1
                }
              ],
              email: this.authService.userData.email,
              amounts : {
                electronic: productPrice
              }
            }
          }
        }
      },
      {
        onSuccess: (options) => {
          this.onSuccessfullPayment(productId);
        },
        onFail: (reason, options) => {
            console.log(reason);
        }
      }
    );
  }

  onSuccessfullPayment(id: string): void {
    this.afs.collection('users')
      .doc(this.authService.userData.id)
      .get()
      .subscribe((user: any) => {
        this.user = user.data();
        this.afs.collection('products').valueChanges().pipe(take(1)).subscribe(prod => {
          this.products = prod;

          this.user.product = id;

          if (!this.user.expirationDate) {
            this.user.expirationDate = dayjs().add(this.products.find(i => i.id === id).duration, 'day').format('YYYY-MM-DDThh:mm');
          } else {
            this.user.expirationDate = dayjs(this.user.expirationDate).add(this.products.find(i => i.id === id).duration, 'day').format('YYYY-MM-DDThh:mm');
          }

          localStorage.removeItem('productID');

          this.afs.collection('users').doc(this.user.uid).set(this.user).then(() => {
            this.authService.user$.next(this.user);
            setTimeout(() => {
              this.router.navigate(['/account']);
            }, 1000);
          });
        });
      });
  }

  isDateExpiry(date: any): boolean {
    const expDate = dayjs(this.user.expirationDate);
    const currDate = dayjs();

    if (!this.user.expirationDate || dayjs(this.user.expirationDate).format() === 'Invalid Date') {
      return false;
    }
    return expDate.isBefore(currDate, 'minute');
  }
}
