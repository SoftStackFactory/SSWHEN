import { Component, Input } from '@angular/core';

/**
 * Generated class for the DataTableComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'data-table',
  templateUrl: 'data-table.html'
})
export class DataTableComponent {

  text: string;

  constructor() {
    console.log('Hello DataTableComponent Component');
    console.log(this.benefitData);
    // for(let i = 0; i < this.benefitData.age.length; i++){
    //   let item = {
    //     age: this.benefitData.age[i],
    //     monthly: this.benefitData.monthly[i],
    //     cumulative: this.benefitData.cumulative[i]
    //   }
    //   this.finalData.push(item);
    console.log(this.finalData);
    
  }
    
  

    @Input() benefitData: any [] = [];
    
    finalData: any [] = [];
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad DataTablePage');
  }
}
  

