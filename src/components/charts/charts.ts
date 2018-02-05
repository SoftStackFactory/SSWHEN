import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'charts',
  templateUrl: 'charts.html'
})

export class ChartsComponent {

  // These properties are used to render the chart. They are assigned values in dashboard.html
  @Input() chartType: string;
  @Input() RetirementYears: any[];
  @Input() MonthlyPayout: any[];
  @Input() CumulativeBenefits: any[];
  @Input() pvOfTotalBenefits: any[];
  
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
