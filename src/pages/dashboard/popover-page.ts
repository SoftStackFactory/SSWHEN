import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {LandingPage} from '../landing/landing';

@Component({
  template: `
    <ion-list class="popover-page">
      <button ion-item on-click="goToProfile()">
        Account
      </button>
      <button ion-item on-click="goToLanding()">
        Logout
      </button>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  showBackdrop: true;

  constructor(private navParams: NavParams, public navCtrl: NavController) {

  }

  ngOnInit() {
  }

  goToProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }

  goToLanding(params){
    if (!params) params = {};
    this.navCtrl.push(LandingPage);
  }

}
