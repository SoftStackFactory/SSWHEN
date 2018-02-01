import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalPage} from './modal-page';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  data = 'monthly';
  editable = false;
  
  // GET THIS DATA FROM SERVICE
  chartDataMonthly: any;
  chartDataCumulative: any;
  
  
  retirementAge: any;
  payout: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    
    // JUST FILLER DATE
    // GET THIS FROM ONCLICK EVENTS
    this.retirementAge = "62";
    this.payout = 1456;
    
  }
  
  

  isEditable() {
    if (this.editable = false) {
      this.editable = true;
    } else {
      this.editable = false;
    }
    console.log("editable clicked");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
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

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Email Results',
      message: "Enter your email to send your results",
      inputs: [
        {
          name: 'title',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Email',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
