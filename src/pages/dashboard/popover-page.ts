import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  template: `
    <ion-list radio-group [(ngModel)]="fontFamily" class="popover-page">
      <ion-item class="text-athelas">
        <ion-label>Account</ion-label>
        <ion-radio value="Account"></ion-radio>
      </ion-item>
      <ion-item class="text-charter">
        <ion-label>Logout</ion-label>
        <ion-radio value="Logout"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  showBackdrop: true;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {

}

ngOnInit() {
}

}
