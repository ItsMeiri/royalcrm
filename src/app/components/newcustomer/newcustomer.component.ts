import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from './../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.scss'],
})
export class NewcustomerComponent {
  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  async onSubmit(form: NgForm) {
    if (form.valid) {
      await this.customersService.add(form.value);
      this.router.navigate(['/customers']);
    }
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
