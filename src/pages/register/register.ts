import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { SSUser } from '../../models/SSUser';
import { Storage } from '@ionic/storage';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public ssusers$: SsUsersProvider,
    public storage: Storage) {
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
              Validators.pattern('[A-Za-z0-9!@#$%]{6,12}')
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
          this.navCtrl.setRoot(DashboardPage);
        }, err => {
          console.log(err);
          console.log("Unsuccessful registration", this.ssUser);
        });
    }
    
  }
  
  //IONIC VIEW LOAD CONFIRMATION FUNCTION
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    console.log(this.infoData);
      console.log(this.ssUser);
      this.ssUser.dateOfBirth = this.infoData.birthDate;
      this.ssUser.gender = this.infoData.gender;
      this.ssUser.FRAbenefit = this.infoData.fra;
      console.log(this.ssUser);
  }
  

  
}

//REGEX TESTING
//https://regex101.com/tests
  
  