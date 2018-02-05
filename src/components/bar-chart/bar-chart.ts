import { Component, Input } from '@angular/core';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})

export class BarChartComponent {
  @Input() xAxis: any[];
  @Input() yAxis: any[];
  
  public barChartLabels:any[];
  public barChartData:any[];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 500, max:2500}}]
      }
  };
  public barChartLegend:boolean = true;
  public barChartType:string = 'bar';
  
  
  constructor(public calculations$: CalculationsProvider) {
    // this.barChartLabels = this.calculations$.retirementYears;
    // this.barChartData = [ {data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year'} ];
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  };


}
