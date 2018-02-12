import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})

export class ResultsPage implements OnInit {
  results: any;
  chartType: string = 'bar';
  horizontalAxis: any[] = [];
  verticalAxis: any[] = [];
  // horizontalAxis: any[] = [62,63,64,65,66,67,68,69,70];
  // verticalAxis: any[] = [1114,1421.4,1528.8,1636.2,1743.6,1851,2016.33,2181.67,2347];
  
  pia: number;
  gender: any;
  dob: any;
  dataa: any;
  
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public calculations$: CalculationsProvider,
    private storage: Storage
    ) {
    this.results = "graph";
  }
  
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
  goToLanding(params){
    if (!params) params = {};
    this.navCtrl.push(LandingPage);
  }
  openEmailModal() {
    let resultsModal = this.modalCtrl.create(EmailModalPage);
    resultsModal.present();
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Email Results',
      message: "Enter your email to send your results",
      inputs: [
        {
          name: 'title',
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
          text: 'Email',
          handler: data => {
            console.log('Saved clicked');
            this.showConfirm();
          }
        }
      ]
    });
    prompt.present();
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Thank you for using SSWHEN',
      message: 'By registering you can view additional details about your retirement benefits',
      buttons: [
        {
          text: 'Home',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.push(LandingPage);
          }
        },
        {
          text: 'Register',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(RegisterPage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  // ionViewWillEnter() {
  // ngOnInit() {
  //   this.storage.get("inputData").then((val) => {
  //     this.pia = val.pia;
  //     this.gender = val.gender;
  //     this.dob = val.dob;
  //     this.dataa = this.calculations$.monthlyBenefit(this.pia, this.gender, this.dob);
  //     //this.storage.clear();
  //     console.log(this.dataa);
  //     console.log(this.dataa.monthly);
  //   });
  //   //   this.horizontalAxis = this.calculations$.retirementYears;
  //   //   this.verticalAxis = [ {data: this.calculations$.monthlyArray, label: 'Monthly Payout per Retirement Year'} ];
  //   this.horizontalAxis = this.dataa.retYears;
  //   this.verticalAxis = [ {data: this.dataa.monthly, label: 'Monthly Payout per Retirement Year'} ];
  // }

// this.pia, this.gender, this.dob, and this.dataa are not accessable outside of the storage.get method
// The next lines of code don't seem to get those properties in time
// Therefore I cannot populate this.horizontalAxis and this.verticalAxis for the charts

  ngOnInit() {
      this.horizontalAxis = this.calculations$.retirementYears;
      this.verticalAxis = [ {data: this.calculations$.monthlyArray, label: 'Monthly Payout per Retirement Year'} ];
      console.log(this.horizontalAxis);
      console.log(this.verticalAxis);
  }

}
  