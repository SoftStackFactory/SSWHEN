import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

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
  private alertCtrl: AlertController,
  public modalCtrl: ModalController
  ) {
    
   
  }
  
//   onEdit(form: NgForm) {
//   console.log(form.value);
// }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

popView(){
    this.navCtrl.push(DashboardPage);
    }
    popView1(){
    this.navCtrl.push(LoginPage);
    }
    
//   ValidateEmail(mail) 
// {
// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
//     console.log("User entered an invalid email address")
// }

}
