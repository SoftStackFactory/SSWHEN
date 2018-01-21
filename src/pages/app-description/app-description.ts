import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  goToInfoInput(){
    this.navCtrl.push(InfoInputPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppDescriptionPage');
  }
  
  

}
