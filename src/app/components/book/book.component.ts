import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../../shared/services/language.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import * as dayjs from "dayjs";
declare var cp: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @ViewChild('bookFormModal', {static: true}) bookFormModal: ElementRef;
  public selectedLanguage: 'ru' | 'kz' = 'ru';
  public bookAmount = 1;

  products = [];
  user!: any;

  get isLoggedIn(): boolean {
    return !(this.authService.isLoggedIn !== true);
  }

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private afs: AngularFirestore
  ) { }

  public ngOnInit(): void {
    this.languageService.getLanguage()
      .subscribe((language) => {
        this.selectedLanguage = language;
      });
  }

  public onchangeLanguage(language: 'ru' | 'kz'): void {
    this.selectedLanguage = language;
    console.log(this.selectedLanguage);
  }

  public addBook(): void {
    this.bookAmount++;
  }

  public removeBook(): void {
    if (this.bookAmount !== 1) {
      this.bookAmount--;
    }
  }

  public onBuy(id): void {
    // this.openModal(this.bookFormModal);
    if (this.isLoggedIn) {
      // this.sendToTelegram(id);
      this.openPaymentWidget(3000, 'product46');
    } else {
      localStorage.setItem('productID', id);
      this.router.navigate(['../registration']).then();
    }
  }

  openPaymentWidget(productPrice: number, productId: string) {
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

  onSuccessfullPayment(id: string) {
    this.afs.collection('users')
        .doc(this.authService.userData.id)
        .get()
        .subscribe((user: any) => {
          this.user = user.data();
          this.afs.collection('products').valueChanges().subscribe(prod => {
            this.products = prod;
            if (!this.user.expirationDate || (this.user.expirationDate && this.isDateExpiry(this.user.expirationDate))) {
              this.user.expirationDate = dayjs().add(this.products.find(i => i.id === id).duration, 'day').format('YYYY-MM-DDThh:mm');
              this.user.product = id;
            } else {
              this.user.expirationDate = dayjs(this.user.expirationDate).add(this.products.find(i => i.id === id).duration, 'day').format('YYYY-MM-DDThh:mm');
              this.user.product = id;
            }
            localStorage.removeItem('productID');

            this.afs.collection('users').doc(this.user.uid).set(this.user).then(() => {
              setTimeout(() => {
                this.router.navigate(['/account']);
              }, 500);
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
