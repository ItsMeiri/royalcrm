import { Injectable } from '@angular/core';
import { Customer } from './../interfaces/customer';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerRef: AngularFirestoreCollection<Customer>;
  constructor(private afs: AngularFirestore) {
    this.customerRef = this.afs.collection('customers');
  }

  add(customer: Customer) {
    this.customerRef.add(customer);
  }

  getAll() {
    return this.customerRef.valueChanges();
  }
}
