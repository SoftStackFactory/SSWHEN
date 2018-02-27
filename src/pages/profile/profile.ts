import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  profileForm: FormGroup;
  inputDisabledEmail: boolean = false;
  inputDisabledPass: boolean = false;
  // the input is set to false by default 
  
  addRow: boolean = false;
  onTheEdit = 'Current Email:';
  onTheEdit1 = 'Password:';
  validateForm: boolean = false;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private alertCtrl: AlertController,
  public modalCtrl: ModalController,
  public formBuilder: FormBuilder
  ) {
  
     this.inputDisabledEmail = true;
     this.inputDisabledPass = true;
     
      this.profileForm = formBuilder.group({
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

   //lets user edit email and changes text instructions for user
   editEmail() {
    this.onTheEdit = 'Change email to:'; 
    this.inputDisabledEmail = false;
    console.log('you can edit the email now');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


    //this event is not fired on submit 
    doAlertAndPopView(){
      let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Your account information has been updated',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(DashboardPage);
    }
    popView(){
     alert('Your account information has been updated');
    }
    
    
    editPassAddRow() {
      this.onTheEdit1 = 'Type your new password:';
      this.inputDisabledPass = false;
      this.addRow = true;
      console.log('you can edit the password now');
  }
  // on click of edit button, input is re-enabled
  
    //doesn't let user submit the form if invalid
    //this function is fired when user clicks "confirm edit" button
    submitIfValid() {
    this.validateForm = true;
    // if(!this.profileForm.controls.password.valid){
    //   let alert = this.alertCtrl.create({
    //   title: '',
    //   subTitle: 'Please re-enter your information',
    //   buttons: ['OK']
    //   });
    // alert.present();
    // console.log("Password is not valid, Unsuccessful registration");
    // } else {
      let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Your account information has been updated',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(DashboardPage);
    console.log("Successful registration", this.validateForm.value);
     
    }
    
  }

// function check_fil() {
//   num = 0;
//   $('input[id="email'])
// }
