import { Component } from '@angular/core';
import {AlertController, NavParams, ViewController} from 'ionic-angular';
import { EmailProvider } from '../../providers/email/email';

@Component({
  selector: 'modal-history',
  templateUrl: 'modal-history.html'
})

export class ModalHistoryComponent {
  historyResult: any;
  background: string;
  data = 'monthly';
  chartType: string = 'bar';
  retYears: any[];
  monthlyPay: any[];
  totalAccumulated: any[];
  tableMonthly: any[] = [];
  tableTotalAccumulated: any[] = [];
  leftTitle: string = 'Retirement Year';
  rightTitleMonthly: string = 'Monthly Payout';
  rightTitleCumulative: string = 'Cumulative Benefit';

  constructor(public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController,
    public email$: EmailProvider) {}

  ngOnInit() {
    this.historyResult = this.navParams.get('result');
    console.log("result from history page: ",this.historyResult);
    
    this.retYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];
    this.monthlyPay = [ {data: this.historyResult.monthly, label: 'Monthly Payout per Retirement Year'} ];
    this.totalAccumulated = [ {data: this.historyResult.cumulative, label: 'Cumulative Benefits per Retirement Year'} ];
    this.tableMonthly = this.historyResult.monthly;
    this.tableTotalAccumulated = this.historyResult.cumulative;
  }
  
  emailResults(data) {
    this.email$.date = "test";
    this.email$.email = data.title;
    this.email$.sixtwo = this.tableMonthly[0];
    this.email$.sixthree = this.tableMonthly[1];
    this.email$.sixfour = this.tableMonthly[2];
    this.email$.sixfive = this.tableMonthly[3];
    this.email$.sixsix = this.tableMonthly[4];
    this.email$.sixseven = this.tableMonthly[5];
    this.email$.sixeight = this.tableMonthly[6];
    this.email$.sixnine = this.tableMonthly[7];
    this.email$.sevenzero = this.tableMonthly[8];
    this.email$.Csixtwo = this.tableTotalAccumulated[0];
    this.email$.Csixthree = this.tableTotalAccumulated[1];
    this.email$.Csixfour = this.tableTotalAccumulated[2];
    this.email$.Csixfive = this.tableTotalAccumulated[3];
    this.email$.Csixsix = this.tableTotalAccumulated[4];
    this.email$.Csixseven = this.tableTotalAccumulated[5];
    this.email$.Csixeight = this.tableTotalAccumulated[6];
    this.email$.Csixnine = this.tableTotalAccumulated[7];
    this.email$.Csevenzero = this.tableTotalAccumulated[8];
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
            this.emailResults(data);
          }
        }
      ]
    });
    prompt.present();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
