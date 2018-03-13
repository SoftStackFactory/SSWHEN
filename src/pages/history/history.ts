import { Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { ModalHistoryComponent} from '../../components/modal-history/modal-history';
import { ResultsProvider } from '../../providers/results/results';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})

export class HistoryPage implements OnInit {
  
  testResults: any;
  Results: any;
  userId: number;
  token: string;
  
  @ViewChildren('changeText',  {read: ElementRef}) components: QueryList<ElementRef>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController,
    public results$: ResultsProvider,
    private storage: Storage) {}

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
      modal.present();
  }


  ngOnInit() {
    // From Register Page, the response of ssusers$.register(), containing userId & token was set to storage
    // From Dashboard Page, the response of resultsProvider.saveResults(), containing userId2 was set to storage
    // this.storage.get('userId').then((val) => {
    this.storage.get('userId2').then((val) => {
        this.userId = val;
      this.storage.get('token').then((val) => {
        this.token = val;
        console.log(this.userId);
        console.log(this.token);
        
        // getResults() is passed userId & token - from local storage
        // The response will be an array containing the user data object associated with the passed userId.
        // From this user data object, history.ts needs the createdAt date string property
        // history.ts needs to send modal-history component the monthly array, and the cumulative array properties 
        this.results$.getResults({"id": this.userId}, this.token).subscribe(response => {
          this.testResults = response.reverse();
          console.log(this.testResults);
          // testResults contains entries not belonging to current user. 
          // To retreive entries made by the current user, testResults must be filtered by the userId of the current user
          var resultsById = [];
          for (let i=0; i<this.testResults.length; i++) {
            if ( this.testResults[i].id === this.userId ) {
              resultsById.push(this.testResults[i]);
            }
          }
          console.log(resultsById);
          this.Results = resultsById;
        }, error => {
            alert("Error");
          // Create cases where the error message depends on the service error, ex 400
          // See common error codes
        })
      });
    });
  }
  
}
