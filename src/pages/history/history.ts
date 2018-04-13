import { Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import { IonicPage, ModalController, PopoverController } from 'ionic-angular';
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
  
  testResults: any[] = [];
  Results: any;
  userId: number;
  token: string;
  errorMessage: string;
  isError: boolean = false;
  
  @ViewChildren('changeText',  {read: ElementRef}) components: QueryList<ElementRef>;

  constructor(
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
    // From Dashboard Page, the response of resultsProvider.saveResults(), containing resultsProviderID was set to storage
    this.storage.get('resultsProviderID').then((val) => {
      this.userId = val;
      this.storage.get('token').then((val) => {
        this.token = val;
        console.log('userId from storage',this.userId);
        console.log('token from storage',this.token);
        
        // results$.getResultsById() is passed userId & token - from local storage
        // The response is a Results model containing the passed userId.
        // From this Results object, history.ts needs the createdAt date string, monthly and cumulative array properties 
        // history.ts needs to send modal-history component the monthly and cumulative array properties 
      
      this.results$.getResultsById(this.userId, this.token).subscribe(response => {
        console.log('Response from results$.getResultsById',response);
        this.testResults.push(response);
        this.testResults = this.testResults.reverse();
        console.log('testResults:',this.testResults);
          
        }, err => {
          this.isError = true;
          console.log(err);
          if(err.status === 0){
            this.errorMessage = 'User is offline';
          }
          else if(err.status === 401){
            this.errorMessage = 'Unauthorized access';
          }else if(err.status === 404){
            this.errorMessage = 'User was not found';
          }else if(err.status === 422){
            this.errorMessage = 'Email is taken';
          }else if(err.status === 500){
            this.errorMessage = 'Server is offline';
          }else {
            this.errorMessage = 'Unable to process request';
          }
        })
        
      });
    });
  }
  
}