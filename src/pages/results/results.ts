import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { EmailProvider } from '../../providers/email/email';

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
    public calculations$: CalculationsProvider,
    public email$: EmailProvider
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
  
  emailResults(data) {
    this.email$.date = "test";
    this.email$.email = data.title;
    this.email$.sixtwo = this.tableMonthly[0];
    this.email$.sixthree = this.tableMonthly[1];
    this.email$.sixfour = this.tableMonthly[2];
    this.email$.sixfive = this.tableMonthly[3];
    this.email$.sixsix = this.tableMonthly[4];
    this.email$.sixseven = this.tableMonthly[5];
    this.email$.sixeight = this.tableMonthly[6];
    this.email$.sixnine = this.tableMonthly[7];
    this.email$.sevenzero = this.tableMonthly[8];

    console.log(this.tableMonthly);
    // console.log(payload);
    this.email$.sendEmailResults()
    .subscribe( res => console.log(res), err => console.log(err))
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
            // Pass in email, array of calculations, date 
            this.emailResults(data);
            console.log(data);
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
  
  sendEmail() {
    
  }
  
  // ionViewWillEnter() {
  //   this.dataa = [];
  //   this.storage.get("inputData").then((val) => {
  //     this.pia = val.pia;
  //     this.gender = val.gender;
  //     this.dob = val.dob;
  //     this.results = this.calculations$.monthlyBenefit(this.pia, this.gender, this.dob);
  //     this.storage.clear();
  //     console.log(this.results);
  //     for(let i = 0; i < this.results.retYears.length; i++){
  //       let item = {
  //         retYear: this.results.retYears[i],
  //         monthlyPay: this.results.monthly[i],
  //         cumulativePay: this.results.cumulative[i]
  //       }
  //       this.dataa.push(item);
  //     }
  //     console.log(this.dataa);
  //   });
  //   // Assigning data to horizontal & vertical Axis doesn't seem to work here
  //   // Is this.dataa is not accessable outside of the storage.get method ?
  //   // console.log(this.dataa);
  //   // for (let i of this.dataa) {
  //   //   this.retYears.push(i.retYear);
  //   //   this.monthlyPay.push(i.monthlyPay);
  //   // }
  // }

  ngOnInit() {
      this.retYears = this.calculations$.retirementYears;
      this.monthlyPay = [ {data: this.calculations$.monthlyBenefit().monthly, label: 'Monthly Payout per Retirement Year'} ];
      this.tableMonthly = this.calculations$.monthlyBenefit().monthly;
      // this.tabulatedData = this.calculations$.tableData;
      
  }

}
  