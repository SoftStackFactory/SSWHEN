import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  selector: 'charts',
  templateUrl: 'charts.html'
})

export class ChartsComponent implements OnInit {

  // Chart component must obtain lifeExpectancy and discountRate from user input
  lifeExpectancy: number = 80;
  discountRate: number = 3.5;

  // Code for charts
  public MonthlyPayout: Array<any> = [];
  public CumulativeBenefits: Array<any> = [];
  public pvOfTotalBenefits: Array<any> = [];
  public RetirementYears: Array<any> = [];
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
  public ChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public barChartType: string = 'bar';


  constructor(public navCtrl: NavController, public navParams: NavParams, public calculations$: CalculationsProvider) {
  }

  ngOnInit() {
    // Execute the code in the service by passing in LE, interest, etc.
    this.calculations$.additiveBenefitsByRetirementYear(this.lifeExpectancy);
    let r_monthly = (this.discountRate / 12) / 100;
    this.calculations$.pvOfBenefitsByRetirementYear(this.lifeExpectancy, r_monthly);
    console.log("retirementYears", this.calculations$.retirementYears);
    console.log("accumulatedBenefits:", this.calculations$.accumulatedBenefits);
    console.log("pvOfBenefits", this.calculations$.pvOfBenefits);

    // Assign data to the chart axes
    this.MonthlyPayout.push({ data: this.calculations$.monthlyBenefits, label: 'Monthly Stipend per Retirement Year' });           
    this.CumulativeBenefits.push({ data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year' });
    this.pvOfTotalBenefits.push({ data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year' });
    this.RetirementYears = this.calculations$.retirementYears;
  }

}
