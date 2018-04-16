import { Component, ElementRef, QueryList, ViewChildren, OnInit} from '@angular/core';
import { IonicPage, ModalController, PopoverController } from 'ionic-angular';
import { LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';
import { ModalHistoryComponent} from '../../components/modal-history/modal-history';
import { ResultsProvider } from '../../providers/results/results';
import { UserDataProvider } from '../../providers/user-data/user-data';

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
    public userData$: UserDataProvider) {}

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
    
    // UserDataProvider was assigned FRAbenefit, gender, dateOfBirth from InfoInput Page
    // And isRegistered, totalContribution, isMarried, userId, token, email, and password in Results Page
    // Coming from the login page, UserDataProvider gets email, password, userId, and token from Login Page
    // And isRegistered, FRAbenefit, gender, dateOfBirth, totalContribution, isMarried, resultsProviderID from Dashboard Page
      
    // The response of results$.getResultsById() is a Results model containing the passed Id.
    // From the response, history.ts needs the createdAt date string
    // And needs to send modal-history component the monthly and cumulative array properties 
    
    this.results$.getResultsById(this.userData$.resultsProviderID, this.userData$.token).subscribe(response => {
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
      });
      
  }
  
}