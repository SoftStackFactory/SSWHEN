import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BenefitProvider } from "../../providers/benefit/benefit";

/**
 * Generated class for the DataTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-table',
  templateUrl: 'data-table.html',
})
export class DataTablePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public $bene: BenefitProvider
    ){}
    
  //NONE OF THIS WORKS.  READ UP ON NAVPARAMS
  
  monthlyBenefitArray: any [] = this.$bene.benefitData.monthly;
  cumulativeBenefitArray: any [] = this.$bene.benefitData.cumulative;
  benefitData: any [] = [];
  
  dataObject: any;
  
  //console.log(monthly);
  
  sortTableData() {
    
    console.log(this.monthlyBenefitArray);
  
    for (let i = 0;  i < this.monthlyBenefitArray.length; i ++) {
      
      let month = this.monthlyBenefitArray[i]
      let total = this.cumulativeBenefitArray[i]
      
      this.dataObject = {
        age: 62 + i,
        monthly: month,
        cumulatve: total
      }
      
      this.benefitData.push(this.dataObject);
      
    }
    
    console.log(this.benefitData);
  
  }
    
    
    // mock data array for testing 
    
    // benefitData: any[] = [
    //     {
    //       age: 62,
    //       monthly: 1000,
    //       cumulative: 10000
    //     },
    //     {
    //       age:63, 
    //       monthly: 2000,
    //       cumulative: 20000
    //     },
    //     {
    //       age: 64,
    //       monthly: 3000,
    //       cumulative: 30000
    //     }
    //   ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataTablePage');
  }

}
