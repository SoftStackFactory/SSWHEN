// Re-usable agnostic chart. chart type, x & y axis data fed in by parent page

import { Component, Input } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})

export class BarChartComponent {
  
  @Input() ChartType: string;
  @Input() xAxis: any[];
  @Input() yAxis: any[];
  // retirementAge: any;
  // payout: any;

  constructor() {}
  
  public barChartOptions:any = {
    responsive: true,
    maintainAspectRatio: true,
    scaleShowVerticalLines: false,
    tooltips: { enabled: false },
    events: ['click'],
    legend: {
      display: false,
      labels: {
        boxWidth: 0,
        fontSize: 12,
        fontStyle: 'bold',
      }
    }
  };
  public barChartLegend:boolean = false;
  public ChartColors: Array<any> = [{
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];

  // events
  public chartClicked(e:any):void {
    if (e.active.length > 0) {
      this.retirementAge = e.active[0]._chart.data.labels[e.active[0]._index];
      this.payout = e.active[0]._chart.data.datasets[0].data[e.active[0]._index];
      console.log("You clicked a Bar");
      // console.log("At retirementAge: ", this.retirementAge);
      // console.log("The payout is: ", this.payout);
    }
    else {
      console.log("You didn't click on a Bar")
    }
    console.log(e);
  };

}