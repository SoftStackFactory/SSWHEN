import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> Modal Popup</ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()"><span ion-text color="primary" showWhen="ios, browser">Cancel</span>
            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="table">
        <div class="table-row row header">
          <div class="table-col col">Header 1</div>
          <div class="table-col col">Header 2</div>
          <div class="table-col col">Header 3</div>
          <div class="table-col col">Header 4</div>
        </div>
        <div class="table-row row">
          <div class="table-col col">1</div>
          <div class="table-col col">2</div>
          <div class="table-col col">3</div>
          <div class="table-col col">4</div>
        </div>
        <div class="table-row row">
          <div class="table-col col">1</div>
          <div class="table-col col">2</div>
          <div class="table-col col">3</div>
          <div class="table-col col">4</div>
        </div>
        <div class="table-row row">
          <div class="table-col col">1</div>
          <div class="table-col col">2</div>
          <div class="table-col col">3</div>
          <div class="table-col col">4</div>
        </div>
        
      </div>
    </ion-content>
  `
})
export class ModalPage {
  background: string;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
  }

}
