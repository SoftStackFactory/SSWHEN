import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';
import { Calculations1Provider } from '../../providers/calculations1/calculations1';
//import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})

export class ResultsPage implements OnInit {
  display: any;
  chartType: string = 'bar';
  retYears: any[] = [];
  monthlyPay: any[] = [];
  tableMonthly: any[] = [];
  // tabulatedData: any[] = [];

  
  results: any;
  pia: number;
  gender: any;
  dob: any;
  dataa: any[] = [];
  
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public calculations1$: Calculations1Provider,
    ) {
    this.display = "graph";
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
  
  //PROBLEM IS HERE WITH ASYNC, MUST FIGURE OUT WAY TO LOAD SERVICE PROPERTIES AFTER DATA IS RETRIEVED 

  ngOnInit () {
      this.retYears = this.calculations1$.benefitData.retYears;
      this.monthlyPay = [ {data: this.calculations1$.benefitData.monthly, label: 'Monthly Payout per Retirement Year'} ];
      this.tableMonthly = this.calculations1$.benefitData.monthly;
      // this.tabulatedData = this.calculations$.tableData;
  }

}
  