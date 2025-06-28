import { Component, OnInit } from '@angular/core';
import {INavigationItem} from '../shared/models/navigation.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUser} from '../shared/models/user.model';
import {map} from 'rxjs/operators';
import {IProduct} from '../shared/models/product.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  uploadSuccess = false;
  isLoading = true;
  users: IUser[] = [];
  commonUsers: IUser[] = [];
  usersSortedByRequest: IUser[] = [];
  products: IProduct[] = [];
  searchUser = '';
  lessonResult: any;
  p1 = 1;
  p2 = 1;
  p3 = 1;

  navigation: INavigationItem[] = [
    { title: 'Пользователи', view: 'users', img: 'settings', isVisible: true},
    { title: 'Экзамены', view: 'exams', img: 'settings', isVisible: true},
    { title: 'Телефоны', view: 'phones', img: 'settings', isVisible: true},
  ];

  activeView = 'exams';
  selectedFile: File | undefined | any;
  phoneNumber: string;

  constructor(
    public afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.onChangeView(this.activeView);
  }

  onChangeView(view: string): void {
    this.activeView = view;
    if (view === 'users') {
      this.onGetProducts();
    }
  }

  onGetProducts(): void {
    if (this.products.length < 1) {
      this.isLoading = true;
      this.afs
        .collection('products')
        .snapshotChanges()
        .pipe(map(j => j.map(i => i.payload.doc.data() as IProduct)))
        .subscribe((resp: IProduct[]) => {
          this.products.length = 0;
          this.products = resp;
          this.onGetUsers();
        });
    }
  }

  onGetUsers(): void {
    this.afs
      .collection('users')
      .snapshotChanges()
      .pipe(map(j => j.map(i => i.payload.doc.data() as IUser)))
      .subscribe((resp: IUser[]) => {
        this.users.length = 0;
        this.users = resp;
        this.commonUsers = resp;
        this.usersSortedByRequest = [...resp.filter(u => u.request && u.request.product && u.request.time)].sort((a, b) => {
          // @ts-ignore
          return new Date(a.request.time.seconds * 1000 + a.request.time.nanoseconds / 1e6) < new Date(b.request.time.seconds * 1000 + b.request.time.nanoseconds / 1e6) ? 1 : -1;
        });
        this.users = this.commonUsers;
        this.users.filter(u => dayjs(u.expirationDate) < dayjs()).forEach(u => this.onSuspendAccess(u, 1));
        this.isLoading = false;
      });
  }

  getActiveUsers(users: IUser[]): IUser[] {
    return users.filter(u => u.product && u.expirationDate);
  }

  getExpiredUsers(users: IUser[]): IUser[] {
    return users.filter(u => u.product && !u.expirationDate);
  }

  getRequests(users: IUser[]): IUser[] {
    return users.filter(u => u.request && u.request.product);
  }

  onGetProductDetails(productId: string): IProduct {
    return this.products.find(p => p.id === productId);
  }

  getDate(d: any): any {
    return d ? new Date(d.seconds * 1000 + d.nanoseconds / 1000000) : null;
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    // @ts-ignore
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        this.lessonResult = JSON.parse(fileReader.result);
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  onGrantAccess(user: IUser): void {

    const temp = JSON.parse(JSON.stringify(user));
    temp.product = user.request.product;
    temp.expirationDate = dayjs().add(this.onGetProductDetails(user.request.product).duration, 'day').format('YYYY-MM-DDTHH:mm');
    delete temp.request;

    this.afs
      .collection('users')
      .doc(user.uid)
      .set(temp)
      .then(() => {
        alert('Доступ предоставлен');
      });
  }

  onSuspendAccess(user: IUser, log?): void {
    const temp = JSON.parse(JSON.stringify(user));
    temp.expirationDate = null;
    // temp.product = null;

    this.afs
      .collection('users')
      .doc(user.uid)
      .set(temp)
      .then(() => {
        log ? console.log('Доступ приостановлен') : alert('Доступ приостановлен');
      });
  }

  onExtendAccess(user: IUser): void {
    const temp = JSON.parse(JSON.stringify(user));
    temp.expirationDate = dayjs().add(3, 'day').format();

    this.afs
      .collection('users')
      .doc(user.uid)
      .set(temp)
      .then(() => { console.log('Доступ продлен'); });
  }

  onDeleteUser(uid): void {
    this.afs.collection('users')
      .doc(uid)
      .delete()
      .then(() => {
        alert('Пользователь удлаен!');
      });
  }

  onRemoveFile(): void {
    this.lessonResult = null;
    this.selectedFile = null;
  }

  onUpload(type: string): void {
    if (type === 'products') {
      this.lessonResult.forEach(product => {
        this.afs
          .collection(type)
          .doc(product.id)
          .set(product)
          .then(() => {
            this.onRemoveFile();
            this.uploadSuccess = true;
            setTimeout(() => this.uploadSuccess = false, 2000);
          });
      });
    } else {
      this.afs
        .collection(type)
        .doc(this.lessonResult.id)
        .set(this.lessonResult)
        .then(() => {
          this.onRemoveFile();
          this.uploadSuccess = true;
          setTimeout(() => this.uploadSuccess = false, 2000);
        });
    }
  }

  onSortUsers(param: string): void {
    if (param === 'common') {
      this.users = this.commonUsers;
    } else {
      this.users = this.usersSortedByRequest;
    }
  }

  saveNumber(): void {
    if (this.phoneNumber) {
      this.afs.collection('contacts').doc('phones').set({techSupport: this.phoneNumber}).then(() => {
        this.phoneNumber = '';
      });
    }
  }
}
