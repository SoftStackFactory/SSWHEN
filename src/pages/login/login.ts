import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
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
  errorMessage: any;
  isError: boolean = false;

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
    console.log("What the form captures:", this.myForm);
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

  popView() {
    this.submitAttempt = true;
    if (!this.myForm.valid) {
      console.log("Unsuccessful login :(", this.myForm);
    } else {
      // this.myForm.value is an {} containing properties email and password
      console.log("Successful login", this.myForm.value);
      this.ssUsersProvider.login(this.myForm.value).subscribe(res => {
        console.log("The return of the ssUsersProvider.login http.post request is: ", res);
        // res is an {} with the properties created, id, ttl, userId
        // We are interested in id (token), and userId
        this.storage.set('userId', res.userId);
        this.storage.set('token', res.id);

        this.ssUsersProvider.getUser(res.userId, res.id).subscribe(res => {
            let alert = this.alertCtrl.create({
              title: '',
              subTitle: 'You are logged in',
              buttons: ['OK']
            });
            alert.present();
            // ssUsersProvider.getUser res is an SSUser except with id instead of password
            // Due to the way the back end code written in sswhen-bk/common/models/ss-user.json, password is a required field in the SSUser model
            // Therefore the user's password has to be added to the SSUser model thats passed into ssUsersProvider's methods
            // This is a security risk best avoided if the backend code makes the password optional instead of required
            this.ssUser = res;
            this.ssUser.password = this.myForm.value.password;
            console.log('Response from ssUsersProvider.getUser', this.ssUser);
            this.storage.set('SSUser', res);
            this.navCtrl.push(DashboardPage);
          }, err => {
            console.log(err)
          });
      }, err => {
        this.isError = true;
        console.log('error message: ', err);
        // handle common error codes, 401, 422, 500, etc.
        if (err.status === 0) {
          this.errorMessage = 'Server Timeout';
        }
        else if (err.status === 401) {
          this.errorMessage = 'Unauthorized Access, check credentials';
        } else if (err.status === 404) {
          this.errorMessage = 'User was not found, check email';
        } else if (err.status === 422) {
          this.errorMessage = 'Unprocessable Entity';
        } else if (err.status === 500) {
          this.errorMessage = 'Server is offline';
        } else {
          this.errorMessage = 'Unable to process request' + err.status + ': ' + err.statusText;
        }
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
