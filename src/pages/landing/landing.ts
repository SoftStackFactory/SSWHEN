import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoInputPage } from '../info-input/info-input';
import { RegisterPage } from '../register/register'

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
    console.log('ionViewDidLoad LandingPage');
  }
  
  toInfoInput(params){
    if (!params) params = {};
    this.navCtrl.push(InfoInputPage);
  }
  
  toRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

}
