import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalPage} from './modal-page';
import {MonthlyChart} from './monthly'; 
import {CumulativeChart} from './cumulative';
import {pvChart} from './presentValue';
import { CalculationsProvider } from '../../providers/calculations/calculations';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage implements OnInit{

  data = 'monthly';
  editable = false;
  retYears: any[] = [];
  monthlyPay: any[] = [];
  totalAccumulated: any[] = [];
  totalPV: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
    public calculations$: CalculationsProvider) {}

  isEditable() {
    if (this.editable = false) {
      this.editable = true;
    } else {
      this.editable = false;
    }
    console.log("editable clicked");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: '100'
          };
        }
    }
      }
    modal.present({ev});
  }
  
  openMonthly() {
    const myModal = this.modalCtrl.create(MonthlyChart);
    myModal.present();
  }
  
  openCumulative() {
    const myModal = this.modalCtrl.create(CumulativeChart);
    myModal.present();
  }
  
  openPresentValue() {
    const myModal = this.modalCtrl.create(pvChart);
    myModal.present();
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
          }
        }
      ]
    });
    prompt.present();
  }
  
  ngOnInit() {
    this.calculations$.additiveBenefitsByRetirementYear();
    this.calculations$.pvOfBenefitsByRetirementYear();
    this.retYears = this.calculations$.retirementYears;
    this.monthlyPay = this.calculations$.monthlyBenefits;
    this.totalAccumulated = this.calculations$.accumulatedBenefits;
    this.totalPV = this.calculations$.pvOfBenefits;
  }
  
}
