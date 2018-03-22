import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import {IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { Storage } from '@ionic/storage';
import { SSUser } from '../../models/SSUser';

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
  ssUser: SSUser;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public ssUsersProvider: SsUsersProvider,
    public storage: Storage,
    public viewCtrl: ViewController
  ) {
    this.myForm = formBuilder.group({
      email: ['', 
        Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            Validators.maxLength(30),
          ])
      ],
      password: ['', 
        Validators.compose([
            Validators.required,
            Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,12}$/)
          ])
      ]
    });
    console.log("What the form captures:",this.myForm);
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

  popView(){
      this.submitAttempt = true;
      if(!this.myForm.valid) {
        console.log("Unsuccessful login :(", this.myForm); 
      } else {
        // this.myForm.value is an {} containing properties email and password
        this.ssUsersProvider.login(this.myForm.value).subscribe( res => {
          console.log("The return of the ssUsersProvider.login http.post request is: ",res);
          // res is an {} with the properties created, id, ttl, userId
          // We are interested in id (token), and userId
          this.storage.set('userId', res.userId);
          this.storage.set('token', res.id);
            
            this.ssUsersProvider.getUser(res.userId, res.id)
              .subscribe( res => {
                let alert = this.alertCtrl.create({
                title: '',
                subTitle: 'You are logged in',
                buttons: ['OK']
                });
                alert.present();
                // alert('Thank you for loging in!');
                console.log("Successful login", this.myForm.value);
                this.ssUser = res;
                console.log(this.ssUser);
                this.storage.set('SSUser', res);
                this.navCtrl.push(DashboardPage);
                }, err => {
                  console.log(err)
                });
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
  
}
