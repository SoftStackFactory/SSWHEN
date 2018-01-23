import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DashboardPage } from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private alertCtrl: AlertController
  ) {
    
   
  }
  
  onEdit(form: ngForm) {
  console.log(form.value);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

popView(){
    this.navCtrl.push(DashboardPage);
    }

}
