import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
      this.infoData = this.navParams.get('infoData');
    }
  
  //SUBMIT AND NAVIGATION FUNCTION
  submit() {
    this.submitAttempt = true;
    if(!this.registerForm.valid){
     console.log("Unsuccessful registration");
    } else {
      console.log(this.infoData);
      console.log(this.registerForm);
      this.ssUser.email = this.registerForm.value.email;
      this.ssUser.password = this.registerForm.value.password;
      this.ssUser.totalContribution = this.registerForm.value.totalTaxContribution;
      this.ssUser.isMarried = this.registerForm.value.maritalStatus;

      console.log(this.ssUser);

      this.ssusers$.register(this.ssUser)
        .subscribe(res => {
          alert("Thank you for registering!");
          console.log(res);
          console.log("Successful registration", this.ssUser);
          this.storage.set('SSUser', this.ssUser);
          this.storage.set('userId', res.id);
          this.storage.set('token', res.token);
          
          this.userData$.totalContribution = res.totalContribution;
          this.userData$.isMarried = res.isMarried;
          
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
  
  //IONIC VIEW LOAD CONFIRMATION FUNCTION
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    console.log(this.infoData);
      console.log(this.ssUser);
      this.ssUser.dateOfBirth = this.userData$.dateOfBirth;
      this.ssUser.gender = this.userData$.gender;
      this.ssUser.FRAbenefit = this.userData$.FRAbenefit;
      console.log(this.ssUser);
  }
  

  
}

//REGEX TESTING
//https://regex101.com/tests
  
  