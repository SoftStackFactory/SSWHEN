import {Component} from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {LandingPage} from '../landing/landing';
import {HistoryPage} from '../history/history';

@Component({
  template: `
    <ion-grid class="popover-page" no-padding>
      <ion-row>
        <ion-col class="menu-full-width" col-auto align-self-end>
          <button ion-item on-click="goToProfile()" padding-horizontal>
            Edit Account
          </button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="menu-full-width" col-auto align-self-end>
          <button ion-item on-click="goToHistory()" padding-horizontal>
            History
          </button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="menu-full-width menu-last" col-auto align-self-end>
          <button ion-item on-click="goToLanding()" padding-horizontal>
            Logout
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
  `
})
export class PopoverPage {
  background: string;
  showBackdrop: true;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public viewCtrl: ViewController
  ) {}

  ngOnInit() {
  }

  goToProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
    this.viewCtrl.dismiss();
  }

  goToHistory(params) {
    if (!params) params = {};
    this.navCtrl.push(HistoryPage);
    this.viewCtrl.dismiss();
  }

  goToLanding(params) {
    if (!params) params = {};
    // this.navCtrl.setRoot(LandingPage);
    this.appCtrl.getRootNav().setRoot(LandingPage);
    this.viewCtrl.dismiss();
  }

}
