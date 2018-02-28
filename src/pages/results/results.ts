import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';

@IonicPage()

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})

export class ResultsPage implements OnInit {
  display: any;
  chartType: string = 'bar';
  retYears: any[] = [];
  monthlyPay: any[];
  tableMonthly: any[] = [];
  dataObject: any;
 
  leftTitle: string = "Retirement Age";
  rightTitleMonthly: string = "Monthly Payout";
 
  results: any;
  pia: number;
  gender: any;
  dob: any;
  dataa: any[] = [];
  infoData: any;
  
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public calculations$: CalculationsProvider,
    public ssUsersProvider: SsUsersProvider
    ) {
    this.display = "graph";
    this.infoData = this.navParams.get('myForm');
  }
  

  
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage, {
      'infoData': this.infoData
    });
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
  
  //getbenefitData() returns an observable
  //subsribe to observable, then parse data for graph and table
  


  ngOnInit(){
    this.calculations$.getBenefitData().subscribe ( data => {
    this.dataObject = data;
    this.dataObject = JSON.parse(this.dataObject._body);
    this.retYears = this.dataObject.retYears;
    this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
    this.tableMonthly = this.dataObject.monthly;
    });

  }

}