import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalDashboardComponent} from '../../components/modal-dashboard/modal-dashboard';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover'; 
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { EmailProvider } from '../../providers/email/email';
import { SsUsersProvider } from '../../providers/ss-users/ss-users';
import { ResultsProvider } from '../../providers/results/results';
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
  show = false;
  chartType: string = 'bar';
  retYears: any[];
  monthlyPay: any[];
  tableMonthly: any [];
  tableAccumulated: any [];
  totalAccumulated: any[];
  lifeExpectancy: number;
  benefitAtFRA: number;
  ageFRA: number;
  emailMonthly: any[] = [];
  emailCumulative: any[] = [];
  dataObject: any;
  results: Results = new Results();
  totalContribution: number;
  loading: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
    public calculations$: CalculationsProvider,
    public ssUsersProvider: SsUsersProvider,
    public resultsProvider: ResultsProvider,
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

            let userModel = {
            email: this.userData$.email,
            password: this.userData$.password,
            dateOfBirth: this.userData$.dateOfBirth,
            gender: this.userData$.gender,
            FRAbenefit: this.userData$.FRAbenefit,
            totalContribution: this.userData$.totalContribution,
            isMarried: this.userData$.isMarried
          }
                  
            // Update the FRAbenefit property of the SSUser model
            userModel.FRAbenefit = data.PIA;
            
            // Update the ssUsersProvider with the new SSUser model
            console.log(userModel);
            this.ssUsersProvider.updateUser(this.userData$.userId, this.userData$.token, userModel).subscribe(response => {
              console.log('FRA updated, res: ',response);
              // ngOnInit() fired to recalculate chart variables with new ssUsersProvider data
              // A timeout is used to ensure ssUsersProvider.updateUser() processes the update before ngOnInit() fires
              setTimeout(this.ngOnInit(), 1000);
            }, error => {
              console.log("Could not update FRA",error);
            })
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
    this.loading = true;
      
      // UserDataProvider was assigned FRAbenefit, gender, dateOfBirth from InfoInput Page
      // And isRegistered, totalContribution, isMarried, userId, token, email, and password in Results Page
      // Coming from the login page, UserDataProvider has email, password, userId, and token only
      
      this.ssUsersProvider.getUser(this.userData$.userId, this.userData$.token).subscribe(response => {
        console.log('Response from SsUsersProvider.getUser() :',response);
        
        // Assign Results model some of its values from SsUsersProvider.getUser's response
              this.results.gender = response.gender;
              this.results.FRAbenefit = response.FRAbenefit;
              this.results.totalContribution = response.totalContribution;
              this.results.isMarried = response.isMarried;
              this.results.dateOfBirth = response.dateOfBirth;
              this.totalContribution = response.totalContribution;
        this.benefitAtFRA = response.FRAbenefit;
        
        // In case the user comes from login page, fill UserDataProvider with:
        this.userData$.isRegistered = true;
        this.userData$.FRAbenefit = response.FRAbenefit;
        this.userData$.gender = response.gender;
        this.userData$.dateOfBirth = response.dateOfBirth; 
        this.userData$.totalContribution = response.totalContribution;
        this.userData$.isMarried = response.isMarried; 
        
        // Run calculations$.getBenefitData(pia, gender, dob), and poplulate the chart/table with the response
        this.calculations$.getBenefitData(response.FRAbenefit, response.gender, response.dateOfBirth).subscribe ( data => {
          // The response is { retYears:[], monthly:[], cumulative:[], pv:[], FRA:number, lifeExpectancy:number }
          this.dataObject = data;
          this.dataObject = JSON.parse(this.dataObject._body);
          this.retYears = this.dataObject.retYears;
          this.monthlyPay = [ {data: this.dataObject.monthly, label: 'Monthly Payout per Retirement Year'} ];
          this.totalAccumulated = [ {data: this.dataObject.cumulative, label: 'Cumulative Payout per Retirement Year'} ];
          this.tableMonthly = this.dataObject.monthly;
          this.tableAccumulated = this.dataObject.cumulative;
          this.lifeExpectancy = Math.round(this.dataObject.lifeExpectancy/12);
          this.ageFRA = Math.round(this.dataObject.FRA / 12);
          this.emailMonthly = this.dataObject.monthly;
          this.emailCumulative = this.dataObject.cumulative;
          
          // Assign UserDataProvider more of its values from calculations$.getBenefitData's response
          this.userData$.retYears = this.dataObject.retYears;
          this.userData$.monthly = this.dataObject.monthly;
          this.userData$.cumulative = this.dataObject.cumulative;
          this.userData$.presentValue = this.dataObject.pv;
          this.userData$.lifeExpectancy = this.lifeExpectancy;
          
          // Assign Results model its remaining values from calculations$.getBenefitData's response
          this.results.monthly = this.dataObject.monthly;
          this.results.cumulative = this.dataObject.cumulative;
          this.results.isRegistered = true;
          this.results.ageFRA = this.dataObject.FRA;
          this.results.lifeExpectancy = this.dataObject.lifeExpectancy;
          this.results.createdAt = new Date();
          console.log("results model now complete: ",this.results);
          
          // Run resultsProvider.saveResults(results, token)
          this.saveResults();
            
        }, err => console.log('Could not run calculations$.getBenefitData(pia, gender, dob)',err));
      
      }, error => {
        console.log("Could not get user",error);
      });
        
  }
  
  saveResults() {
    this.resultsProvider.saveResults(this.results, this.userData$.token).subscribe( res => {
    // Response is the same as Results model, except with an additional id: userId 
    // thats different than the one from ssUsersProvider
    console.log("Response from resultsProvider.saveResults():",res);
    // Assign UserDataProvider its remaining value from resultsProvider.saveResults's response
    this.userData$.resultsProviderID = res.id;
    console.log(this.userData$);
    }, err => {
      console.log(err);
    });
  }
  
  presentTable(type) {
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

}