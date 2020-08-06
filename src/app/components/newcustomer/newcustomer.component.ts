import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.scss'],
})
export class NewcustomerComponent {
  constructor() {}
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  onSubmit(form: NgForm) {
    console.log(form);
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      tel: null,
      address: '',
      notes: '',
    });
  }
}
