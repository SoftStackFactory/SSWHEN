import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalPage} from './modal-page';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import {MonthlyComponent} from '../../components/monthly/monthly';
import {CumulativeComponent} from '../../components/cumulative/cumulative';
import {PresentValueComponent} from '../../components/present-value/present-value';


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
  monthlyComponent = MonthlyComponent;

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
  // navigates to MonthlyComponent through navPush in the html
  // openMonthly() {
  //   const myModal = this.modalCtrl.create(MonthlyComponent);
  //   myModal.present();
  // }
  
  openCumulative() {
    // const myModal = this.modalCtrl.create(CumulativeComponent);
    // myModal.present();
    this.navCtrl.push(CumulativeComponent)
  }
  
  openPresentValue() {
    const myModal = this.modalCtrl.create(PresentValueComponent);
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
    this.monthlyPay = [ {data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year'} ];
    this.totalAccumulated = [ {data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year'} ];
    this.totalPV = [ {data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year'} ];
  }
  
}
