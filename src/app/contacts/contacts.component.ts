import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  isLoading = true;
  techSupportNumber = '';

  constructor(public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection('contacts').doc('phones').valueChanges().subscribe((res: any) => {
      this.techSupportNumber = res.techSupport;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  replaceSymbols(value: string): string {
    return value.replace(/\D/g, '');
  }

}
