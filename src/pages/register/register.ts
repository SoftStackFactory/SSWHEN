import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  totalTaxContribution: any;
  maritalStatus: string;
  email: string;
  confirmedEmail: boolean;
  password: string;
  confirmedPassword: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  testFunction(button){
    alert("this works");
  }
  
  // //EMAIL DATA VALIDATION FUNCTION
  // emailconfirmation(email,confirmedEmail){
  //     if (email===confirmedEmail){
  //       this.confirmedEmail = true;
  //     } else {
  //       this.confirmedEmail = false;
  //     }
  //   };
    
  //   //PASSWORD DATA VALIDATION FUNCTION
  //   passwordConfirmation(password,confirmedEmail){
  //     if(password===confirmedEmail){
  //       this.confirmedPassword = true;
  //     } else {
  //       this.confirmedPassword = false;
  //     }
  //   };

}
