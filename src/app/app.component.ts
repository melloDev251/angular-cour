import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test = {
    name: 'lol',
    age: 78,
    email: 'lol@gmail.com',
  };

  alerts: Alert[] | any;

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  currentValue = '';
  getValue(val: any) {
    console.log(val);
    this.currentValue = val;
  }

  siteUrl = window.location.href;

  getClick(test: any) {
    alert(test);
  }

  myEvent(evt: any) {
    console.log(evt);
  }

  name = 'melino';
  disabledBox = true;
  enabledBox() {
    this.disabledBox = false;
  }

  data = [
    {
      name: 'mello',
      age: 25,
    },
    {
      name: 'kaliana',
      age: 20,
    },
    {
      name: 'samia',
      age: 23,
    },
    {
      name: 'ella',
      age: 18,
    },
  ];

  getSubmit(sub: any) {
    console.log(sub);
  }
}
