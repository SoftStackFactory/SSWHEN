import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Modal Popup
        </ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <span ion-text color="primary" showWhen="ios, browser">Cancel</span>
            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <h2>Table Name</h2>
          <p>Table Description</p>
        </ion-item>
        
      </ion-list>
    </ion-content>
  `
})
export class ModalPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  constructor(private navParams: NavParams) {

}

ngOnInit() {
}

}
