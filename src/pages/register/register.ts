import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

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

    totalTaxContribution: Number;
    maritalStatus: String;
    email: String;
    confirmedEmail: Boolean;
    password: String;
    confirmedPassword: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  //TEST FUNCTIONS
  
  toDashboard(){
    //if(!params) params = {};
    this.navCtrl.push(DashboardPage);
  };
  
  // myForm = formBuilder.group({
  //   email: ['email'],
  //   password: ['value']
  // });
  
  
  /*POST FUNCTIONS
   -takes inputs 
      marital status
      total tax contribution
      email
      password
    
    DATA VALIDATION FUNCTIONS
    -takes inputs and validates its the same information
       confirm email
       confirm password
  */
  

}
