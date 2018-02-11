import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';
import { ComponentsModule } from "../../components/components.module";
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { Storage } from '@ionic/storage';
import { BenefitProvider } from '../../providers/benefit/benefit';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    private storage: Storage,
    public bene$: BenefitProvider
  ) 
  {}

  
  pia: number;
  
  gender: any;
  
  dob: any;
  
  results: any;
  
  data: any [] = [];
  

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
      message: 'By registering you can view additional data about your retirement benefits',
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
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    
  }
  
  ionViewWillEnter() {
    this.data = [];
    this.storage.get("inputData").then((val) => {
      this.pia = val.pia;
      this.gender = val.gender;
      this.dob = val.dob;
      this.results = this.bene$.monthlyBenefit(this.pia, this.gender, this.dob);
      this.storage.clear();
      console.log(this.results);
      console.log(this.data);
      for(let i = 0; i < this.results.age.length; i++){
        let item = {
          age: this.results.age[i],
          monthly: this.results.monthly[i],
          cumulative: this.results.cumulative[i]
        }
        this.data.push(item);
      }
      console.log(this.data);
    });
  }
}
