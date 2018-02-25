import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalDashboardComponent} from '../../components/modal-dashboard/modal-dashboard';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';

@IonicPage()

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage implements OnInit {
  
  @ViewChildren('changeText',  {read: ElementRef}) components: QueryList<ElementRef>;
  data = 'monthly';
  editable = false;
  chartType: string = 'bar';
  retYears: any[] = [];
  monthlyPay: any[] = [];
  totalAccumulated: any[] = [];
  lifeExpectancy: number;
  benefitAtFRA: number;
  ageFRA: number;



  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController, 
              public modalCtrl: ModalController, 
              public alertCtrl: AlertController,
              public calculations$: CalculationsProvider,
              public mock$: MockDataProvider) {}

  isEditable() {
    this.editable = !this.editable;
    console.log("editable clicked", this.editable);
  }

  presentLanguagePopover(myEvent) {
    let popover = this.popoverCtrl.create(LangaugePopoverComponent, {
      queryEle: this.components.toArray()
    });
    popover.present({
      ev: myEvent
    });
  }

  presentAccountPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, myEvent, { cssClass: 'account-popover'});
    popover.present({
      ev: myEvent
    });
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
    // this.retYears = this.calculations$.retirementYears;
    // this.monthlyPay = [ {data: this.calculations$.monthlyBenefit().monthly, label: 'Monthly Payout per Retirement Year'} ];
    // this.totalAccumulated = [ {data: this.calculations$.monthlyBenefit().cumulative, label: 'Cumulative Benefits per Retirement Year'} ];
    // this.lifeExpectancy = this.calculations$.lifeExpect/12;
    // this.benefitAtFRA = this.calculations$.FRAbenefitAmount;
    // this.ageFRA = this.calculations$.fullRetAge / 12;
  presentModal(type) {
    let chartType = type;
    console.log(chartType);
    let modal = this.modalCtrl.create(ModalDashboardComponent, {
      'modalType': chartType
    });
    
    modal.present();
  }

  ionViewWillEnter() {
    
  }

}
