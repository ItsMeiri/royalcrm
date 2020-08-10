import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/interfaces/customer';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  // data: Customer[];
  // unsub: Subscription;
  // constructor(private customersService: CustomersService) {}
  // ngOnInit() {
  //   this.unsub = this.customersService
  //     .getAll()
  //     .pipe(tap(console.log))
  //     .subscribe((data) => (this.data = data));
  // }
  // ngOnDestroy(): void {
  //   this.unsub.unsubscribe();
  //   console.log('destroy');
  // }

  customers$: Observable<Customer[]>;
  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }
}
