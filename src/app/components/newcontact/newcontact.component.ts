import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss'],
})
export class NewcontactComponent {
  contact = {
    name: '',
    email: '',
    birthday: null,
    phones: '',
  };

  constructor(public contactService: ContactsService) {}

  addContact(form) {
    // console.log(form.value);
    this.contactService.addContact(form.value);
    this.resetForm(form);
  }

  resetForm(form) {
    form.resetForm({
      name: '',
      email: '',
      birthday: null,
      phones: '',
    });
  }
}
