import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {take, tap} from 'rxjs/operators';
import firebase from 'firebase';
import {TelegramApiService} from './telegram-api.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;

  user$ = new BehaviorSubject(null);

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private telegram: TelegramApiService,
    public router: Router,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.afs.doc(`users/${user.uid}`).valueChanges().pipe(
          tap((r: any) => {
            const U = r;
            U.id = U?.uid;
            this.userData = U;
            this.user$.next(U);
            localStorage.setItem('user', JSON.stringify(this.userData));
          })
        ).pipe(take(1)).subscribe();
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  // tslint:disable-next-line:typedef
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['account']).then();
        }, 500);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // tslint:disable-next-line:typedef
  signUp(email, password, name, phone) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = {
          name,
          phone,
          request: {},
          email: result.user.email,
          emailVerified: result.user.emailVerified,
          uid: result.user.uid,
        };
        if (localStorage.getItem('productID')) {
          user.request = {
            product: localStorage.getItem('productID'),
            time: firebase.firestore.FieldValue.serverTimestamp()
          };
        }

        this.setUserData(user).then();
        return user;
      }).catch((error) => {
        if (error.message === 'The email address is badly formatted.') {
          window.alert('Адрес электронной почты имеет неправильный формат');
        } else {
          window.alert(error.message);
        }
      });
  }

  setUserToData(): void {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    this.afs.doc(`users/${uid}`).get().pipe(take(1)).subscribe(u => {
      if (u) {
        this.user$.next(u);
      }
    });
  }

  sendVerificationMail(): Promise<void> {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => alert('Подтвердите почту'));
  }

  forgotPassword(passwordResetEmail): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  public setUserData(user): Promise<void> {
    const selectedExam = localStorage.getItem('productID');
    const userData: IUser = {
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid
    };
    localStorage.setItem('user', JSON.stringify(userData));
    return this.afs.doc(`users/${user.uid}`).set(user, { merge: true }).then(() => {
      if (selectedExam) {
        const order = {
          name: user.name ? user.name : 'не указано',
          email: user.email,
          phone: user.phone ? user.phone : 'не указан',
          productID: localStorage.getItem('productID')
        };
        this.telegram.sendMessage(order).subscribe(() => {
          localStorage.removeItem('selectedExam');
          localStorage.removeItem('productID');
        });
      }
    });
  }

  public logout(): Promise<void> {
    localStorage.clear();
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']).then();
    });
  }
}
