import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AppDescriptionPage } from '../app-description/app-description';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LandingPage');
  }
  
  toLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  
  toAppDescription(params){
    if (!params) params = {};
    this.navCtrl.push(AppDescriptionPage);
  }

}
