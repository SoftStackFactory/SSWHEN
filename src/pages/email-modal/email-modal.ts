import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the EmailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-modal',
  templateUrl: 'email-modal.html',
})
export class EmailModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
    
    
  }
  closeModal() {
      this.viewCtrl.dismiss();
    }
    
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailModalPage');
  }

}
