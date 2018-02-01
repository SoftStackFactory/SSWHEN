import { Component } from '@angular/core';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})

export class BarChartComponent {
  
  // mock data for charts
  // mockChartData: any[] = [1000, 1100, 1200, 1300, 1400, 1540, 1650, 1782, 1860, 1945];
  // mockLabels: string[] = ['62', '63', '64', '65', '66', '67', '68', '69', '70'];
  
  constructor(public calculations$: CalculationsProvider) {}
  
  public barChartData:any[] = [
    {data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year'}
  ];
  
  public barChartLabels:string[] = this.calculations$.retirementYears;
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 500, max:2500}}]
      }
  };
  
  public barChartLegend:boolean = true;
  
  public barChartType:string = 'bar';
  
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  };
 // Make it so when clicked that data is displayed below the chart instead of hover
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }



}
