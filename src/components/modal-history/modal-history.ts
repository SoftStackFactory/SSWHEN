import { Component } from '@angular/core';
import {AlertController, NavParams, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { HistoryPage } from '../../pages/history/history';

@Component({
  selector: 'modal-history',
  templateUrl: 'modal-history.html'
})

export class ModalHistoryComponent {
  historyResult: any;
  background: string;
  data = 'monthly';
  chartType: string = 'bar';
  retYears: any[] = [];
  monthlyPay: any[] = [];
  totalAccumulated: any[] = [];
  tableMonthly: any[] = [];
  tableTotalAccumulated: any[] = [];
  leftTitle: string = 'Retirement Year';
  rightTitleMonthly: string = 'Monthly Payout';
  rightTitleCumulative: string = 'Cumulative Benefit';

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public alertCtrl: AlertController,
              public calculations$: CalculationsProvider) {}

  ngOnInit() {
    this.historyResult = this.navParams.get('result');
    console.log("result from history page: ",this.historyResult);

    this.retYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];
    this.monthlyPay = [ {data: this.historyResult.monthly[0], label: 'Monthly Payout per Retirement Year'} ];
    this.totalAccumulated = [ {data: this.historyResult.cumulative[0], label: 'Cumulative Benefits per Retirement Year'} ];
    this.tableMonthly = this.historyResult.monthly[0];
    this.tableTotalAccumulated = this.historyResult.cumulative[0];
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


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
