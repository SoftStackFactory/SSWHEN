import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { SSUser } from '../../models/SSUser';
import { Storage } from '@ionic/storage';
import { UserDataProvider } from "../../providers/user-data/user-data";

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  
  ssUser = new SSUser();
  infoData: any;
  registerForm: FormGroup;
  submitAttempt: boolean = false;
  errorMessage: string;
  isError: boolean = false;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public ssusers$: SsUsersProvider,
    public storage: Storage,
    public userData$: UserDataProvider) {
      this.registerForm = formBuilder.group({
        maritalStatus: ['', 
          Validators.compose([
              Validators.required
            ])
        ],
        totalTaxContribution: ['', 
          Validators.compose([
              Validators.required,
                Validators.pattern('[0-9]{1,9}')
            ])
        ],
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
      // Retreive the form input data from Results Page via navParams
      this.infoData = this.navParams.get('infoData');
    }
  
  //SUBMIT AND NAVIGATION FUNCTION
  submit() {
    this.submitAttempt = true;
    if(!this.registerForm.valid){
     console.log("Unsuccessful registration");
    } else {
      console.log("Register Page Form Results:",this.registerForm);
      // Assign ssUser model its remaining properties properties from the form
      this.ssUser.email = this.registerForm.value.email;
      this.ssUser.password = this.registerForm.value.password;
      this.ssUser.totalContribution = this.registerForm.value.totalTaxContribution;
      this.ssUser.isMarried = this.registerForm.value.maritalStatus;
      console.log("ssUser model now complete: ",this.ssUser);
      this.storage.set('SSUser', this.ssUser);
        

      this.ssusers$.register(this.ssUser).subscribe(res => {
          // The response is like ssUser{}, but with id and token instead of password
          console.log("response from ssusers$.register(): ",res);
          console.log("Successful registration! The userId is: ", res.id);
          console.log("Successful registration! The token is: ", res.token);
          this.storage.set('userId', res.id);
          this.storage.set('token', res.token);
          
          // Fill userData$ with more data from the response
          this.userData$.isRegistered = true;
          this.userData$.totalContribution = res.totalContribution;
          this.userData$.isMarried = res.isMarried;
          this.userData$.userId = res.id;
          this.userData$.token = res.token;
          
          this.navCtrl.setRoot(DashboardPage);
        }, err => {
          this.isError = true;
          console.log(err);
          console.log("Unsuccessful registration", this.ssUser);
          if(err.status === 0){
            this.errorMessage = 'User is offline';
          }else if(err.status === 404){
            this.errorMessage = 'User was not found';
          }else if(err.status === 422){
            this.errorMessage = 'Email is taken';
          }else if(err.status === 500){
            this.errorMessage = 'Server is offline';
          }else {
            this.errorMessage = 'Unable to process request';
          }
        });
    }
    
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Registration Successful!',
      subTitle: 'Thank you for registering!',
      buttons: ['Continue']
    });
    alert.present();
  }
  
  ionViewDidLoad() {
    // SSUser{} has properties email: "", password: "", dateOfBirth: "", gender: "", FRAbenefit: number, totalContribution: number, isMarried: boolean
    // Assign ssUser model some of its data from userData$ or infoData;
    // userData$ currently has {dateOfBirth, gender, FRAbnefit} from Info-Input Page
    console.log(this.userData$);
    this.ssUser.dateOfBirth = this.userData$.dateOfBirth;
    this.ssUser.gender = this.userData$.gender;
    this.ssUser.FRAbenefit = this.userData$.FRAbenefit;
    
    // infoData retreives {birthDate: "", gender: "", fra: ""} from results page
    // console.log("Info Data from Results Page:",this.infoData);
    // this.ssUser.dateOfBirth = this.infoData.birthDate;
    // this.ssUser.gender = this.infoData.gender;
    // this.ssUser.FRAbenefit = this.infoData.fra;
  }
  
}

//REGEX TESTING
//https://regex101.com/tests
  
  