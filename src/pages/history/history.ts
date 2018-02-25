import {Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import {ModalHistoryComponent} from '../../components/modal-history/modal-history';
import { ResultsProvider } from '../../providers/results/results';

@IonicPage()

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})

export class HistoryPage implements OnInit {
  
  testResults: any;
  monthlies: any = [];
  cumulatives: any = [];
  dates: any = [];
  sendData: any = [];
  
  @ViewChildren('changeText',  {read: ElementRef}) components: QueryList<ElementRef>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController,
    public results$: ResultsProvider) {}

  presentLanguagePopover(myEvent) {
    let popover = this.popoverCtrl.create(LangaugePopoverComponent, {
      queryEle: this.components.toArray()
    });
    popover.present({
      ev: myEvent
    });
  }

  presentHistoryModal(result) {
    let modal = this.modalCtrl.create(ModalHistoryComponent, { 'result': result } );
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: '100'
          };
        }
      }
    };
    modal.present({ev});
  }


  ngOnInit() {
    // pass userId & token into getResults()
    // The response will be an array of multiple user data objects.
    // The charts need to access only one of these user data objects.
    this.results$.getResults({"id": 1}, "dWt6GiL5LlLPjJpKMXVIAqzv1h9o211mo4tVtQOWRJYvVa1WDlwtFACvV2vN49Cv")
    .subscribe(response => {
      this.testResults = response;
      console.log(this.testResults);
      console.log(typeof this.testResults);

      for (let i=0; i<this.testResults.length; i++) {
        this.dates.push( (new Date(Date.parse(this.testResults[i].createdAt))).toLocaleDateString() );
        this.monthlies.push(this.testResults[i].monthly);
        this.cumulatives.push(this.testResults[i].cumulative);
        this.sendData.push({
          date: this.dates,
          monthly: this.monthlies,
          cumulative: this.cumulatives
        });
      }
      console.log("Data to send to modal-history component: ",this.sendData);
    }, error => {
        alert("Error");
      // Create cases where the error message depends on the service error, ex 400
      // See common error codes
    })
  }

}
