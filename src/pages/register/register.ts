import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  registerForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
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
  }
  
  //SUBMIT AND NAVIGATION FUNCTION
  submit() {
    this.submitAttempt = true;
    if(!this.registerForm.valid){
     console.log("Unsuccessful registration");
    } else {
      alert("Thank you for registering!");
      console.log("Successful registration", this.registerForm.value);
      this.navCtrl.setRoot(DashboardPage);
    }
    
  }
  
  //IONIC VIEW LOAD CONFIRMATION FUNCTION
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  

  
}

//REGEX TESTING
//https://regex101.com/tests
  
  