import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {EmailModalPage} from '../email-modal/email-modal';
import {LandingPage} from '../landing/landing';
import {CalculationsProvider} from '../../providers/calculations/calculations';
import {EmailProvider} from '../../providers/email/email';
import {SsUsersProvider} from '../../providers/ss-users/ss-users';
import {ResultsProvider} from '../../providers/results/results';
import {SSUser} from '../../models/SSUser';
import {Results} from '../../models/Results';
import {Storage} from '@ionic/storage';

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

  pia: number;
  gender: any;
  dob: any;
  dataa: any[] = [];
  infoData: any;

  results: Results = new Results();
  ssUser: SSUser = new SSUser();
  userId: string;
  token: string;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public calculations$: CalculationsProvider,
              public email$: EmailProvider,
              public ssUsersProvider: SsUsersProvider,
              public resultsProvider: ResultsProvider,
              public storage: Storage,
              public viewCtrl: ViewController) {
    this.display = "graph";
    this.infoData = this.navParams.get('myForm');
    this.calculations$.pia = this.infoData.fra;
    this.calculations$.dob = this.infoData.birthDate;
    this.calculations$.gender = this.infoData.gender;
  }

  goToRegister(params) {
    if (!params) params = {};
    this.navCtrl.push(RegisterPage, {
      'infoData': this.infoData
    });
  }

  goToLanding(params) {
    if (!params) params = {};
    this.navCtrl.push(LandingPage);
  }

  openEmailModal() {
    let resultsModal = this.modalCtrl.create(EmailModalPage, {
      'infoData': this.infoData
    });
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
      .subscribe(res => console.log(res), err => console.log(err))
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

  //getbenefitData() returns an observable
  //subsribe to observable, then parse data for graph and table

  ngOnInit() {
    this.calculations$.getBenefitData()
      .subscribe(data => {
        this.dataObject = data;
        this.dataObject = JSON.parse(this.dataObject._body);
        console.log(this.dataObject);
        this.retYears = this.dataObject.retYears;
        this.monthlyPay = [{data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'}];
        this.tableMonthly = this.dataObject.monthly;

        console.log(this.results);
        this.saveResults();
      }, err => {
        console.log(err);
      });
  }

  saveResults() {
    //save results
    this.results.monthly = this.dataObject.monthly;
    this.results.cumulative = this.dataObject.cumulative;
    this.results.createdAt = new Date();
    this.results.isRegistered = false;
    this.results.gender = this.infoData.gender;
    this.results.FRAbenefit = this.infoData.fra;
    this.results.isMarried = false;
    this.results.totalContribution = 0;
    this.results.dateOfBirth = this.infoData.birthDate;
    console.log(this.results);
    this.resultsProvider.saveResults(this.results, this.token)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

}