import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalDashboardComponent} from '../../components/modal-dashboard/modal-dashboard';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { EmailProvider } from '../../providers/email/email';
import { MockDataProvider } from '../../providers/mock-data/mock-data';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { ResultsProvider } from '../../providers/results/results';
import { Storage } from '@ionic/storage';
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
  totalAccumulated: any[];
  lifeExpectancy: number;
  benefitAtFRA: number;
  ageFRA: number;
  emailMonthly: any[] = [];
  emailCumulative: any[] = [];
  dataObject: any;
  storageObject: any;
  results: Results = new Results();
  totalContribution: number;
  token: string;
  id: string;
  info: any;

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
    public email$: EmailProvider
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
  
            this.storage.get('SSUser').then((val) => {
              let userModel = val;
              this.storage.get('token').then((val) => {
                this.token = val;
                this.storage.get('userId').then((val) => {
                  this.id = val;
                  
                  // Update the FRAbenefit property of the SSUser model
                  // Re-set the SSUser model into local storage
                  userModel.FRAbenefit = data.PIA;
                  console.log("new ssUser model:",userModel);
                  this.storage.set('SSUser', userModel);
                  
                  // Update the ssUsersProvider with the new SSUser model
                  this.ssUsersProvider.updateUser(this.id, this.token, userModel).subscribe(response => {
                    console.log('FRA updated, res: ',response);
                  }, error => {
                    console.log("Could not update FRA",error);
                  })
                        
                });        
              });
              console.log("new ssUser model:",userModel);
              this.storage.set('SSUser', userModel);
            });
            this.storage.get('SSUser').then((val) => {
              console.log("Updated SSUser:",val);
              // This actually shows the old SSUser, before the update
            })
            this.navCtrl.setRoot(DashboardPage);
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
  
  emailResults(data) {
    this.email$.date = "test";
    this.email$.email = data.title;
    this.email$.sixtwo = this.emailMonthly[0];
    this.email$.sixthree = this.emailMonthly[1];
    this.email$.sixfour = this.emailMonthly[2];
    this.email$.sixfive = this.emailMonthly[3];
    this.email$.sixsix = this.emailMonthly[4];
    this.email$.sixseven = this.emailMonthly[5];
    this.email$.sixeight = this.emailMonthly[6];
    this.email$.sixnine = this.emailMonthly[7];
    this.email$.sevenzero = this.emailMonthly[8];
    this.email$.Csixtwo = this.emailCumulative[0];
    this.email$.Csixthree = this.emailCumulative[1];
    this.email$.Csixfour = this.emailCumulative[2];
    this.email$.Csixfive = this.emailCumulative[3];
    this.email$.Csixsix = this.emailCumulative[4];
    this.email$.Csixseven = this.emailCumulative[5];
    this.email$.Csixeight = this.emailCumulative[6];
    this.email$.Csixnine = this.emailCumulative[7];
    this.email$.Csevenzero = this.emailCumulative[8];
    console.log("test");
    this.email$.sendEmailDashboard()
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
          }
        }
      ]
    });
    prompt.present();
  }
  
  //assign all properties, make all http calls OnInit
  
  ngOnInit() {
    
    this.storage.get('SSUser').then((val) => {
      console.log("SSUser from Local Storage:",val);
      this.calculations$.pia = val.FRAbenefit;
      this.calculations$.gender = val.gender;
      this.calculations$.dob = val.dateOfBirth;
      this.results.gender = val.gender;
      this.results.FRAbenefit = val.FRAbenefit;
      this.results.totalContribution = val.totalContribution;
      this.results.isMarried = val.isMarried;
      this.results.dateOfBirth = val.dateOfBirth;
      this.totalContribution = val.totalContribution;
      this.benefitAtFRA = val.FRAbenefit;
      
      // dataObject is assigned the data from calculations$.getBenefitData(), which is:
      // {retYears:[], monthly:[], cumulative:[], pv:[], FRA:number, lifeExpectancy:number}
      this.calculations$.getBenefitData().subscribe ( data => {
          this.dataObject = data;
          this.dataObject = JSON.parse(this.dataObject._body);
          this.retYears = this.dataObject.retYears;
          this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
          this.totalAccumulated = [ {data: this.dataObject.cumulative, label: 'Cumulative Payout per Retirement Year'} ];
          this.tableMonthly = this.dataObject.monthly;
          
          this.results.monthly = this.dataObject.monthly;
          this.results.cumulative = this.dataObject.cumulative;
          this.results.isRegistered = true;
          this.results.ageFRA = this.dataObject.FRA;
          this.results.lifeExpectancy = this.dataObject.lifeExpectancy;
          this.results.createdAt = new Date();
          
          this.lifeExpectancy = Math.round(this.dataObject.lifeExpectancy/12);
          this.ageFRA = Math.round(this.dataObject.FRA / 12);
          this.emailMonthly = this.dataObject.monthly;
          this.emailCumulative = this.dataObject.cumulative;
          
          this.saveResults();
        }, err => console.log(err));
    });
    
  }
  
  saveResults() {9}
  
  presentModal(type) {
    let chartType = type;
    console.log(chartType);
    let modal = this.modalCtrl.create(ModalDashboardComponent, {
      'modalType': chartType,
      'retYears': this.retYears,
      'tableMonthly': this.dataObject.monthly,
      'totalAccumulated': this.dataObject.cumulative
    });
    
    modal.present();
  }

  ionViewDidEnter() {}

}
