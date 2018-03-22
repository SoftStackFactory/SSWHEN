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
import { UserDataProvider } from '../../providers/user-data/user-data';
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
  show = false;
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
  userModel: any;

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
    public userData$: UserDataProvider,
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
          placeholder: 'New FRA Benefit'
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
            this.show = !this.show;
            
            this.storage.get('SSUser').then((val) => {
              let userModel = val;
              this.storage.get('token').then((val) => {
                this.token = val;
                this.storage.get('userId').then((val) => {
                  this.id = val;
                  
                  // Update the FRAbenefit property of the SSUser model
                  // Re-set the SSUser model into local storage
                  userModel.FRAbenefit = data.PIA;
                  this.storage.set('SSUser', userModel);
                  
                  // Update the ssUsersProvider with the new SSUser model
                  console.log(this.id);
                  console.log(this.token);
                  console.log(userModel);
                  this.ssUsersProvider.updateUser(this.id, this.token, userModel).subscribe(response => {
                    console.log('FRA updated, res: ',response);
                    // ngOnInit() fired to recalculate chart variables with new ssUsersProvider data
                    // A timeout is used to ensure ssUsersProvider.updateUser() processes the update before ngOnInit() fires
                    setTimeout(this.ngOnInit(), 1000);
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
    
    // userId and token are defined on the UserDataProvider class in Register Page
    console.log("userId from UserDataProvider:",this.userData$.userId);
    console.log("token from UserDataProvider:",this.userData$.token);
    this.ssUsersProvider.getUser(this.userData$.userId, this.userData$.token).subscribe(response => {
      console.log('Response from SsUsersProvider.getUser() :',response);
      // Assign calculations$ {pia, gender, dob} from ssUsersProvider
      this.calculations$.pia = response.FRAbenefit;
      this.calculations$.gender = response.gender;
      this.calculations$.dob = response.dateOfBirth;
      // Assign Results model some of its values from ssUsersProvider
      this.results.gender = response.gender;
      this.results.FRAbenefit = response.FRAbenefit;
      this.results.totalContribution = response.totalContribution;
      this.results.isMarried = response.isMarried;
      this.results.dateOfBirth = response.dateOfBirth;
      this.totalContribution = response.totalContribution;
      this.benefitAtFRA = response.FRAbenefit;
      }, error => {
        console.log("Could not get user",error);
      });
      
      // Run calculations$.getBenefitData(), and poplulate the chart/table with the response
      this.calculations$.getBenefitData().subscribe ( data => {
          // The response is { retYears:[], monthly:[], cumulative:[], pv:[], FRA:number, lifeExpectancy:number }
          this.dataObject = data;
          this.dataObject = JSON.parse(this.dataObject._body);
          this.retYears = this.dataObject.retYears;
          this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
          this.totalAccumulated = [ {data: this.dataObject.cumulative, label: 'Cumulative Payout per Retirement Year'} ];
          this.tableMonthly = this.dataObject.monthly;
          this.lifeExpectancy = Math.round(this.dataObject.lifeExpectancy/12);
          this.ageFRA = Math.round(this.dataObject.FRA / 12);
          this.emailMonthly = this.dataObject.monthly;
          this.emailCumulative = this.dataObject.cumulative;
          
          // Assign Results model its remaining values from the response
          this.results.monthly = this.dataObject.monthly;
          this.results.cumulative = this.dataObject.cumulative;
          this.results.isRegistered = true;
          this.results.ageFRA = this.dataObject.FRA;
          this.results.lifeExpectancy = this.dataObject.lifeExpectancy;
          this.results.createdAt = new Date();
          
          this.saveResults();
        }, err => console.log(err));
    
  }
  
  saveResults() {
    console.log("results model now complete: ",this.results);
    console.log("UserDataProvider has: ",this.userData$);
    this.resultsProvider.saveResults(this.results, this.userData$.token).subscribe( res => {
    // Response is the same as Results model, except with an additional id: userId 
    // thats different than the one from ssUsersProvider
    console.log("Response from resultsProvider.saveResults(): ",res);
    this.storage.set('resultsProviderID', res.id);
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

  // ngCharts reqire manual updating, even if chart data changes
  reFresh() {
    this.ngOnInit()
  }

}
