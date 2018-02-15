import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  inputDisabledEmail: boolean = false;
  inputDisabledPass: boolean = false;
  // the input is set to false by default 
  addRow: boolean = false;
  onTheEdit = 'Current Email:';
  onTheEdit1 = 'Password:';

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private alertCtrl: AlertController,
  public modalCtrl: ModalController,
  ) {
  
     this.inputDisabledEmail = true;
     this.inputDisabledPass = true;
   
  }
  
//   onEdit(form: NgForm) {
//   console.log(form.value);
// }

   editEmail() {
    this.onTheEdit = 'Change email to:'; 
    this.inputDisabledEmail = false;
    console.log('you can edit the email now');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

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

//   ValidateEmail(mail) 
// {
// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
//     console.log("User entered an invalid email address")
// }

}
