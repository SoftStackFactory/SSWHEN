import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppDescriptionPage } from '../app-description/app-description';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.clear();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LandingPage');
  }
  
  toAppDescription(params){
    if (!params) params = {};
    this.navCtrl.push(AppDescriptionPage);
  }
  
  toLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

}
