import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InfoInputPage } from '../info-input/info-input';

/**
 * Generated class for the AppDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-description',
  templateUrl: 'app-description.html',
})
export class AppDescriptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }
  
  goToInfoInput(){
    this.navCtrl.push(InfoInputPage);
  }
  
  benefitInfoAlert(){
    let alert = this.alertCtrl.create({
      title: 'Full Retirement Benefit',
      message: 'Your Full Retirement Benefit is an estimate of the monthly income you will receive if you begin social security benefits at your Full Retirement Age, which is determined by the Social Security Administration.  You will be able to get this information from the Social Security website.',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppDescriptionPage');
  }
  
  

}
