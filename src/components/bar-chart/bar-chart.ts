import { Component } from '@angular/core';


@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})
export class BarChartComponent {
  retirementAge: any;
  payout: any;
  
  // mock data for charts
  mockLabels: string[] = ['62', '63', '64', '65', '66', '67', '68', '69', '70'];
  mockChartData: any[] = [1050, 1100, 1200, 1300, 1400, 1540, 1650, 1782, 1860, 1945];
  chartData: any;
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
      enabled: false,
    }
    // scales: {
    //     yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 500, max:2500}}]
    //   }
  };
  public barChartLabels:string[] = this.mockLabels;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public barChartData:any[] = [
    {data: this.mockChartData, label: 'Monthly Payout'}

  ];
  // events
  public chartClicked(e:any):void {
    if (e.active.length > 0) {
      this.retirementAge = e.active[0]._chart.data.labels[e.active[0]._index];
      this.payout = e.active[0]._chart.data.datasets[0].data[e.active[0]._index];
      console.log("Bar")
    }
    else {
      console.log("not Bar")
    }
    
    console.log(e);
  };


  constructor() {

  }

}
