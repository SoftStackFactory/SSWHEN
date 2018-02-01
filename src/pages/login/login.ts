import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
    myForm: FormGroup;
    submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public formBuilder: FormBuilder) {
    
     this.myForm = formBuilder.group({
    email: ['',
    Validators.compose([ 
    Validators.required,
    Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]
    )],
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  popView(){
      this.submitAttempt = true;
      if(!this.myForm.valid) {
        console.log("Unsuccessful registration :("); 
      } else {
        alert('Thank you for registering!');
        console.log("Successful registration", this.myForm.value);
        this.navCtrl.push(DashboardPage);
      }
    }

    
    
    
  sendLink(){
    alert('Future Popout: Please enter your email: _________');
    alert('Thank you. An email has been sent to your address with a reset link. Please follow the link to set a new password');
  }

  submit() {
      this.submitAttempt = true;
      if(!this.myForm.valid) {
        console.log("Unsuccessful registration :("); 
      } else {
        alert('Thank you for registering!');
        console.log("Successful registration", this.myForm.value);
      }
    }

}
