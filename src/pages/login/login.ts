import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { Storage } from '@ionic/storage';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public ssUsersProvider: SsUsersProvider,
    public storage: Storage
  ) {
    
  this.myForm = formBuilder.group({
    email: ['',
      Validators.compose([ 
      Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]
    )],
    password: ['', 
      Validators.compose([
          Validators.required,
          Validators.pattern('[A-Za-z0-9!@#$%]{6,12}')
        ])
    ]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  popView(){
      this.submitAttempt = true;
      if(!this.myForm.valid) {
        console.log("Unsuccessful registration :(", this.myForm); 
      } else {
        // login user using /SSUser/login
        this.ssUsersProvider.login(this.myForm.value)
          .subscribe( res => {
            alert('Thank you for loging in!');
            console.log("Successful login", this.myForm.value);
            console.log(res);
            this.storage.set('userId', res.userId);
            this.storage.set('token', res.id);
            this.navCtrl.push(DashboardPage);
          }, err => {
            // handle common error codes, 401, 422, 500, etc.
            console.log(err);
          });
      }
    }
  
    sendLink() {
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Type in your email address and a link will be sent to your inbox to reset your password:",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send reset link',
          handler: data => {
            console.log('Saved clicked');
            this.anotherAlert();
          }
        }
      ]
    });
    prompt.present();
    }
    
    anotherAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'An email has been sent to your address with a reset link. Please follow the link to set a new password',
      buttons: ['OK']
    });
    alert.present();
    }
  

  submit() {
      this.submitAttempt = true;
      if(!this.myForm.valid) {
        console.log("Unsuccessful registration :("); 
      } else {
        console.log("Successful Email Submission", this.myForm.value);
      }
    }

}
