import { Component } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})
export class BarChartComponent {

  text: string;
  
  // mock data for charts
  mockLabels: string[] = ['62', '63', '64', '65', '66', '67', '68', '69', '70'];
  mockChartData: any[] = [1000, 1100, 1200, 1300, 1400, 1540, 1650, 1782, 1860, 1945];
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 500, max:2500}}]
      }
  };
  public barChartLabels:string[] = this.mockLabels;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.mockChartData, label: 'Monthly Payout'}

  ];
  
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 // Make it so when clicked that data is displayed below the chart instead of hover
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  constructor() {
    console.log('Hello BarChartComponent Component');
    this.text = 'Hello World';
  }

}
