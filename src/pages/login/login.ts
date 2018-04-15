import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { SSUser } from '../../models/SSUser';
import { UserDataProvider } from "../../providers/user-data/user-data";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm: FormGroup;
  submitAttempt: boolean = false;
  ssUser: SSUser;
  isError: boolean = false;
  errorMessage: any;
  loading: boolean;
  type: string = 'password';
  showPass: boolean = false;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public ssUsersProvider: SsUsersProvider,
    public viewCtrl: ViewController,
    public userData$: UserDataProvider
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

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

  login() {
    this.submitAttempt = true;
    if (!this.myForm.valid) {
      console.log("Unsuccessful login :(", this.myForm);
    } else {
      this.loading = true;

      // this.myForm.value is an {} containing properties email and password
      console.log("Successful login", this.myForm.value);
      this.userData$.email = this.myForm.value.email;
      this.userData$.password = this.myForm.value.password;

      this.ssUsersProvider.login(this.myForm.value).subscribe(res => {
        console.log("The return of the ssUsersProvider.login http.post request is: ", res);
        // res contains {created, id, ttl, userId}.  We are interested in id (token), and userId
        this.userData$.userId = res.userId;
        this.userData$.token = res.id;

        this.navCtrl.push(DashboardPage);
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
