import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalDashboardComponent} from '../../components/modal-dashboard/modal-dashboard';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { ResultsProvider } from '../../providers/results/results';
import { Storage } from '@ionic/storage';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Results } from '../../models/Results';

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
  results: Results = new Results();
  userModel: any;
  token: string;
  id: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
    public calculations$: CalculationsProvider,
    public mock$: MockDataProvider,
    public ssUsersProvider: SsUsersProvider,
    public resultsProvider: ResultsProvider,
    public storage: Storage,
    public userData$: UserDataProvider
  ) {}

  isEditable() {
    this.editable = !this.editable;
    console.log("editable clicked", this.editable);
    
    let alert = this.alertCtrl.create({
      title: 'Edit FRA Benefit ?',
      inputs: [
        {
          name: 'PIA',
          placeholder: 'New primary insurance amount'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            console.log("New primary insurance amount:",data.PIA);
            this.storage.get('SSUser').then((val) => {
              this.userModel = val;
              this.storage.get('token').then((val) => {
                this.token = val;
                this.storage.get('userId').then((val) => {
                  this.id = val;
                  
                  this.userModel.FRAbenefit = data.PIA;
                  this.ssUsersProvider.updateUser(this.id, this.token, this.userModel)  
                  .subscribe(response => {
                    console.log('FRA updated');
                  }, error => {
                    console.log("Could not update FRA",error);
                  })
                        
                });        
              });
            });
          }
        }
      ]
    });
  alert.present();

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
      console.log(this.calculations$.pia, "pia");
      console.log(this.calculations$.gender, "gender");
      console.log(this.calculations$.dob, "dob");
      console.log(this.dataObject);
          this.results.gender = val.gender;
          this.results.FRAbenefit = val.FRAbenefit;
          this.results.dateOfBirth = val.dateOfBirth;
          this.results.isMarried = val.isMarried;
          this.results.totalContribution = val.totalContribution;
          this.totalContribution = val.totalContribution;
    
      //call backend calculation route, using updated service properties, returns an observable
      this.calculations$.getBenefitData()
        .subscribe ( data => {
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
          
          console.log(this.calculations$.pia, "pia");
          console.log(this.calculations$.gender, "gender");
          console.log(this.calculations$.dob, "dob");
          console.log(this.dataObject);
          console.log(this.retYears);
          console.log(this.monthlyPay);
          console.log(this.totalAccumulated);
          console.log(this.tableMonthly);
          
          this.results.monthly = this.dataObject.monthly;
          this.results.cumulative = this.dataObject.cumulative;
          this.results.createdAt = new Date();
          this.results.isRegistered = false;
          this.saveResults();
        }, err => console.log(err));
    });
  }
  
  saveResults() {
    console.log(this.results);
    this.resultsProvider.saveResults(this.results, this.userData$.token)
      .subscribe( res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
  

  presentModal(type) {
    let chartType = type;
    console.log(chartType);
    let modal = this.modalCtrl.create(ModalDashboardComponent, {
      'modalType': chartType,
      'retYears': this.retYears,
      'tableMonthly': this.dataObject.monthly,
      'tableAccumulated': this.dataObject.cumulative
    });
    
    modal.present();
  }

  ionViewDidEnter() { 
  }

}
