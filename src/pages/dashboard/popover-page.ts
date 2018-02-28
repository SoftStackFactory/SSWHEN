import {Component, OnInit} from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {LandingPage} from '../landing/landing';
import {HistoryPage} from '../history/history';
import {SsUsersProvider} from '../../providers/ss-users/ss-users';
import {Storage} from '@ionic/storage';

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
export class PopoverPage implements OnInit {
  background: string;
  showBackdrop: true;
  private token: string;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public viewCtrl: ViewController,
    public ssUsersProvider: SsUsersProvider,
    public storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(this.token);
    })
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
    this.ssUsersProvider.logout(this.token)
      .subscribe( res => {
        this.appCtrl.getRootNav().setRoot(LandingPage);
        this.viewCtrl.dismiss();
      }, err => {
        console.log(err);
      });
  }

}
