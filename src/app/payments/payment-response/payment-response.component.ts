import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../shared/services/auth.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrls: ['./payment-response.component.scss']
})
export class PaymentResponseComponent {

  user!: any;
  userId: string;
  products: any[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private auth: AuthService,
      private afs: AngularFirestore
  ) {
    alert('Оплата успешна');
    this.route.queryParams.subscribe(params => {
      if (localStorage.getItem('paymentStarted') && params.pg_payment_id) {
        localStorage.removeItem('paymentStarted');
        const id = localStorage.getItem('productID');
        // tslint:disable-next-line:no-non-null-assertion
        this.userId = JSON.parse(localStorage.getItem('user')!).uid;

        this.afs.collection('users')
            .doc(this.userId)
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
                  }, 2000);
                });
              });
            });
      } else {
        this.router.navigate(['/home']);
      }
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
