import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  _contacts: Contact[] = [
    {
      name: 'Clarice Parks',
      email: 'clariceparks@roughies.com',
      birthday: new Date('2017-04-19T06:16:23'),
      phones: [],
    },
    {
      name: 'Conway Ramirez',
      email: 'conwayramirez@roughies.com',
      birthday: new Date('2019-10-21T11:21:25'),
      phones: ['+1 (891) 536-2836', '+1 (923) 407-2269', '+1 (843) 454-3111'],
    },
    {
      name: 'Parks Berger',
      email: 'parksberger@roughies.com',
      birthday: new Date('2015-03-01T11:24:31'),
      phones: ['+1 (933) 524-3053', '+1 (967) 476-2589'],
    },
    {
      name: 'Ryan Potts',
      email: 'ryanpotts@roughies.com',
      birthday: new Date('2017-09-09T12:53:31'),
      phones: ['+1 (896) 485-3111'],
    },
    {
      name: 'Sara Blankenship',
      email: 'sarablankenship@roughies.com',
      birthday: new Date('2017-01-04T03:56:25'),
      phones: [],
    },
    {
      name: 'Carly Mayo',
      email: 'carlymayo@roughies.com',
      birthday: new Date('2017-08-05T12:57:02'),
      phones: ['+1 (945) 580-3642'],
    },
    {
      name: 'Collier Bishop',
      email: 'collierbishop@roughies.com',
      birthday: new Date('2018-04-15T12:16:06'),
      phones: [],
    },
    {
      name: 'Foster Fitzpatrick',
      email: 'fosterfitzpatrick@roughies.com',
      birthday: new Date('2020-07-03T12:28:19'),
      phones: ['+1 (961) 419-2287', '+1 (879) 490-3042', '+1 (892) 499-2467'],
    },
    {
      name: 'Annette Fulton',
      email: 'annettefulton@roughies.com',
      birthday: new Date('2018-08-11T04:22:55'),
      phones: ['+1 (829) 588-3418', '+1 (897) 518-3099', '+1 (963) 421-2597'],
    },
    {
      name: 'Heather Matthews',
      email: 'heathermatthews@roughies.com',
      birthday: new Date('2016-01-14T11:44:30'),
      phones: ['+1 (966) 453-3362'],
    },
  ];

  getAll(): Contact[] {
    return this._contacts;
  }

  addContact(contact) {
    let { name, email, phones, birthday } = contact;
    let _phones = new Array(0);
    if (phones) {
      _phones = [phones];
    }
    this._contacts.push({
      name,
      email,
      birthday,
      phones: _phones,
    });

    // const _phones = [];
    // _phones.push(phones);
  }
}
