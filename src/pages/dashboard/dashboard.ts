import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalDashboardComponent} from '../../components/modal-dashboard/modal-dashboard';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { Storage } from '@ionic/storage';

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
  retYears: any[];
  monthlyPay: any[];
  tableMonthly: any [];
  tableAccumulated: any [];
  totalAccumulated: any[];
  lifeExpectancy: number;
  benefitAtFRA: any;
  ageFRA: number;
  totalContribution: any;
  dataObject: any;
  storageObject: any;



  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController, 
              public modalCtrl: ModalController, 
              public alertCtrl: AlertController,
              public calculations$: CalculationsProvider,
              public mock$: MockDataProvider,
              public ssUsersProvider: SsUsersProvider,
              public storage: Storage) {}

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
  
  //assign all properties, make all http calls OnInit
  
  ngOnInit() {
    
    //get user info from local storage, assign to service properties, returns a promise
    this.storage.get('SSUser').then((val) => {
      this.calculations$.pia = val.FRAbenefit;
      this.calculations$.gender = val.gender;
      this.calculations$.dob = val.dateOfBirth;
      this.totalContribution = "$" + val.totalContribution;

      //call backend calculation route, using updated service properties, returns an observable
      this.calculations$.getBenefitData().subscribe ( data => {
        this.dataObject = data;
        this.dataObject = JSON.parse(this.dataObject._body);
        this.retYears = this.dataObject.retYears;
        this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
        this.totalAccumulated = [ {data: this.dataObject.cumulative, label: 'Cumulative Payout per Retirement Year'} ];
        this.tableMonthly = this.dataObject.monthly;
        this.tableAccumulated = this.dataObject.cumulative;
        this.lifeExpectancy = this.dataObject.lifeExpectancy / 12;
        this.ageFRA = this.dataObject.FRA / 12;
        this.benefitAtFRA = "$" + this.calculations$.pia;
      });
    });
  }
  
  presentModal(type) {
    let chartType = type;
    console.log(chartType);
    let modal = this.modalCtrl.create(ModalDashboardComponent, {
      'modalType': chartType, 
      'tableMonthly': this.tableMonthly,
      'tableAccumulated': this.tableAccumulated,
      'retYears': this.retYears
    });
    
    modal.present();
  }

}
