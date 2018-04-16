import {Component, OnInit} from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {LandingPage} from '../landing/landing';
import {HistoryPage} from '../history/history';
import {SsUsersProvider} from '../../providers/ss-users/ss-users';
import { UserDataProvider } from '../../providers/user-data/user-data';

@Component({
  template: `
    <ion-list class="popover-page" no-margin margin-right no-padding>
        <button ion-item block full on-click="goToProfile()">
          Edit Account
        </button>
        <button ion-item block full on-click="goToHistory()">
          History
        </button>
        <button ion-item block full on-click="goToLanding()">
          Logout
        </button>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  showBackdrop: true;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public viewCtrl: ViewController,
    public ssUsersProvider: SsUsersProvider,
    public userData$: UserDataProvider
  ) {}

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
    this.navCtrl.setRoot(LandingPage);
    this.ssUsersProvider.logout(this.userData$.token)
      .subscribe( res => {
        this.appCtrl.getRootNav().setRoot(LandingPage);
        this.viewCtrl.dismiss();
      }, err => {
        console.log(err);
      });
  }

}
