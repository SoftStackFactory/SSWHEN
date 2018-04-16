import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { SSUser } from '../../models/SSUser';
import { UserDataProvider } from "../../providers/user-data/user-data";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;
  inputDisabledEmail: boolean = false;
  inputDisabledPass: boolean = false;
  // the input is set to false by default 
  
  addRow: boolean = false;
  onTheEdit = 'Current Email:';
  onTheEdit1 = 'Password:';
  validateForm: boolean = false;
  ssUser: SSUser;
  type: string = 'password';
  showPass: boolean = false;  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public ssusers$: SsUsersProvider,
    public userData$: UserDataProvider) {
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
                Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,12}$/)
              ])   
          ],
          cpassword: ['', 
            Validators.compose([
                Validators.required,
                Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,12}$/)
              ])
          ]
      });
  }
  
  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }


   //lets user edit email and changes text instructions for user
  editEmail() {
    this.onTheEdit = 'Enter current or new email:'; 
    this.inputDisabledEmail = false;
    console.log('you can edit the email now');
  }

    //this event is not fired on submit 
  doAlertAndPopView(){
    let profileAlert = this.alertCtrl.create({
      title: 'Your account information has been updated',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // user has clicked the alert button
            // begin the alert's dismiss transition
            let navTransition = profileAlert.dismiss();
            
            console.log('Leaving ProfilePage');
            
            navTransition.then(() => {
              this.navCtrl.pop();
            });
            
            return false;
          }
        }
      ]
    });
    profileAlert.present();
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
    this.userData$.email = this.profileForm.value.email;
    this.userData$.password = this.profileForm.value.password;
    
    let userModel = {
      email: this.userData$.email,
      password: this.userData$.password,
      dateOfBirth: this.userData$.dateOfBirth,
      gender: this.userData$.gender,
      FRAbenefit: this.userData$.FRAbenefit,
      totalContribution: this.userData$.totalContribution,
      isMarried: this.userData$.isMarried
    };
    
    this.ssusers$.updateUser(this.userData$.userId, this.userData$.token, userModel).subscribe(res => {
      console.log("Successful update", res);
      // this.navCtrl.setRoot(DashboardPage);
      this.doAlertAndPopView()
      }, err => {
        console.log(err);
      });
    }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

  ngOnInit() {}
    
}