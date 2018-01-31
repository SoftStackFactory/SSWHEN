import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalculationsProvider} from '../../providers/calculations/calculations';

@IonicPage()

@Component({
  selector: 'charts',
  templateUrl: 'charts.html'
})

export class ChartsComponent implements OnInit {

  r: number = 3.5;
  
  // Code for charts
  public CumulativeBenefits:Array<any> = [ ];
  public pvOfTotalBenefits:Array<any> = [ ];
  public RetirementYears:Array<any> = [ ];
  public ChartOptions2:any = { responsive: true};
  public ChartOptions:any = { responsive: true,
    scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'y-axis'
      }
    }],
        xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'x-axis'
      }
    }]
  }
  };
  
  public ChartColors:Array<any> = [{
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public ChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public barChartType:string = 'bar';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculations$: CalculationsProvider) {
  }

  ngOnInit(){
    // Execute the code in the service by passing in LE, interest, etc.
    this.calculations$.additiveBenefitsByRetirementYear(80);
    let r_monthly = (this.r/12)/100;
    this.calculations$.pvOfBenefitsByRetirementYear(80, r_monthly);  
    console.log("retirementYears",this.calculations$.retirementYears);
    console.log("accumulatedBenefits:",this.calculations$.accumulatedBenefits);
    console.log("pvOfBenefits",this.calculations$.pvOfBenefits);
    
    // Assign data to the chart axes
    this.CumulativeBenefits.push( {data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year'} );
    this.pvOfTotalBenefits.push( {data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year'} );
    this.RetirementYears = this.calculations$.retirementYears;
  }

  
}


