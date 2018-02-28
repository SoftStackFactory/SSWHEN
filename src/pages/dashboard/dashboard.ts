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
    public userData$: UserDataProvider,
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

  presentModal(type) {
    let chartType = type;
    console.log(chartType);
    let modal = this.modalCtrl.create(ModalDashboardComponent, {
      'modalType': chartType
    });
    // let ev = {
    //   target: {
    //     getBoundingClientRect: () => {
    //       return {
    //         top: '100'
    //       };
    //     }
    //   }
    // };
    // modal.present({ev});
    modal.present();
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
    // this.email$.sixtwo = 1;
    // this.email$.sixthree = 1;
    // this.email$.sixfour = 2;
    // this.email$.sixfive = 3;
    // this.email$.sixsix = 4;
    // this.email$.sixseven = 5;
    // this.email$.sixeight = 6;
    // this.email$.sixnine = 7;
    // this.email$.sevenzero = 8;
    // // this.email$.Csixtwo = 9;
    // this.email$.Csixthree = 10;
    // this.email$.Csixfour = 11;
    // this.email$.Csixfive = 21;
    // this.email$.Csixsix = 13;
    // this.email$.Csixseven = 14;
    // this.email$.Csixeight = 15;
    // this.email$.Csixnine = 16;
    // this.email$.Csevenzero = 17;
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
    this.lifeExpectancy = this.calculations$.lifeExpect/12;
    this.benefitAtFRA = this.calculations$.FRAbenefitAmount;
    this.ageFRA = this.calculations$.fullRetAge / 12;
    this.emailMonthly = this.calculations$.monthlyBenefit().monthly;
    this.emailCumulative = this.calculations$.monthlyBenefit().cumulative;
    
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
    
      //call backend calculation route, using updated service properties, returns an observable
      this.calculations$.getBenefitData()
        .subscribe ( data => {
          this.dataObject = data;
          this.dataObject = JSON.parse(this.dataObject._body);
          this.retYears = this.dataObject.retYears;
          this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
          this.totalAccumulated = [ {data: this.dataObject.cumulative, label: 'Cumulative Payout per Retirement Year'} ];
          this.tableMonthly = this.dataObject.monthly;
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
      'totalAccumulated': this.dataObject.cumulative
    });
    
    modal.present();
  }

  ionViewDidEnter() { 
  }

}
