import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {IonicPage, NavController, NavParams, AlertController, ModalController, ViewController} from 'ionic-angular';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { SSUser } from '../../models/SSUser';
import { Storage } from '@ionic/storage';
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
  private token: string;
  private userId: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    public ssusers$: SsUsersProvider,
    public viewCtrl: ViewController,
      public storage: Storage) {
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


   //lets user edit email and changes text instructions for user
  editEmail() {
    this.onTheEdit = 'Change email to:'; 
    this.inputDisabledEmail = false;
    console.log('you can edit the email now');
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
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
    // if(!this.profileForm.controls.password.valid){
    //   let alert = this.alertCtrl.create({
    //   title: '',
    //   subTitle: 'Please re-enter your information',
    //   buttons: ['OK']
    //   });
    // alert.present();
    // console.log("Password is not valid, Unsuccessful registration");
    // } else {
    
    this.ssUser.email = this.profileForm.value.email;
    this.ssUser.password = this.profileForm.value.password;

    console.log(this.ssUser);

    this.ssusers$.updateUser(this.userId, this.token, this.ssUser)
      .subscribe(res => {
        this.ssUser = res;
        console.log(this.ssUser);
        console.log("Successful update", this.ssUser);
        this.storage.set('SSUser', this.ssUser);

        // this.navCtrl.setRoot(DashboardPage);
        this.doAlertAndPopView()
      }, err => {
        console.log(err);
        console.log("Invalid field. Please see required field", this.ssUser);
      });
    //   let alert = this.alertCtrl.create({
    //   title: '',
    //   subTitle: 'Your account information has been updated',
    //   buttons: ['OK']
    // });
    // alert.present();
    // this.navCtrl.push(DashboardPage);
    // console.log("Successful registration");
     
    }

  ngOnInit() {
    this.storage.get('SSUser').then((val) => {
        this.ssUser = val;
      this.storage.get('userId').then((val) => {
          this.userId = val;
        this.storage.get('token').then((val) => {
          this.token = val;
          console.log(this.ssUser);
          console.log(this.userId);
          console.log(this.token);
        })
      })
    })
  }
    
}