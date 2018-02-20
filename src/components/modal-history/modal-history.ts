import { Component } from '@angular/core';
import {AlertController, NavParams, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

/**
 * Generated class for the ModalHistoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-history',
  templateUrl: 'modal-history.html'
})
export class ModalHistoryComponent {
  background: string;
  data = 'monthly';
  chartType: string = 'bar';
  retYears: any[] = [];
  monthlyPay: any[] = [];
  totalAccumulated: any[] = [];
  tableMonthly: any[] = [];
  tableTotalAccumulated: any[] = [];
 
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public alertCtrl: AlertController,
              public calculations$: CalculationsProvider) {

  }

  ngOnInit() {
    this.retYears = this.calculations$.retirementYears;
    this.monthlyPay = [ {data: this.calculations$.monthlyBenefit().monthly, label: 'Monthly Payout per Retirement Year'} ];
    this.totalAccumulated = [ {data: this.calculations$.monthlyBenefit().cumulative, label: 'Cumulative Benefits per Retirement Year'} ];
    this.tableMonthly = this.calculations$.monthlyBenefit().monthly;;
    this.tableTotalAccumulated = this.calculations$.monthlyBenefit().cumulative;
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
