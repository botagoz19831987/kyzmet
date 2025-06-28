import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IUser} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private FIRESTORE: AngularFirestore) {}

  public getDetails(UID: string): Observable<any> {
    return this.FIRESTORE.collection('users').doc(UID).get();
  }

  public getUsers(): Observable<IUser[]> {
    return this.FIRESTORE.collection('users').valueChanges({idField: 'uid'}) as Observable<IUser[]>;
  }

  public getUserProducts(userId): any {
    return this.FIRESTORE
      .collection('users')
      .doc(userId)
      .get();
  }
}
