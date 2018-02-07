import { Component, OnInit } from '@angular/core';

import {NavController, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  selector: 'monthly',
  templateUrl: 'monthly.html'
})

export class MonthlyComponent implements OnInit {

  retYears: any[] = [];
  monthlyPay: any[] = [];
  
  public ChartOptions: any = { 
    responsive: true, 
    maintainAspectRatio: true,
    tooltips: { enabled: false },
    events: ['click'],
    legend: {
            display: true,
            labels: {
                boxWidth: 0,
                fontSize: 12,
                fontStyle: 'bold',
            }
    },
    onClick:function(c,i){
          let e = i[0];
          var x_value = this.data.labels[e._index];
          var y_value = Math.round(this.data.datasets[0].data[e._index]).toLocaleString();
          console.log('(age '+  x_value+', $'+ y_value+' )');
          alert('(age: '+  x_value+', benefit: $'+ y_value+' )');
    }
  };
  public ChartColors: Array<any> = [{
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];
  public ChartLegend: boolean = false;
  public lineChartType: string = 'line';
  public barChartType: string = 'bar';
  
  constructor(public calculations$: CalculationsProvider, 
              public viewCtrl: ViewController,
              public navCtrl: NavController) {}
  
    ngOnInit() {
    this.retYears = this.calculations$.retirementYears;
    this.monthlyPay = [ {data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year'} ];
  }
  
    dismiss() {
    // this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }

}