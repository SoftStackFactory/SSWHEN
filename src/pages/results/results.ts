import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';



@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  data: any = [
    { age: 62, monthlyPayout: 1000 },
    { age: 63, monthlyPayout: 1000 },
    { age: 64, monthlyPayout: 1000 },
    { age: 65, monthlyPayout: 1000 },
    { age: 66, monthlyPayout: 1000 },
    { age: 67, monthlyPayout: 1000 },
    { age: 68, monthlyPayout: 1000 },
    { age: 69, monthlyPayout: 1000 },
    { age: 70, monthlyPayout: 1000 }
    ];
  results: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
    this.results = "graph";
    
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
  
  openEmailModal() {
    let resultsModal = this.modalCtrl.create(EmailModalPage);
    resultsModal.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}