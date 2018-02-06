import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalPage} from './modal-page';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage implements OnInit{

  data = 'monthly';
  editable = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
    public calculations$: CalculationsProvider) {}

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
  
  ngOnInit() {
    this.calculations$.additiveBenefitsByRetirementYear();
    this.calculations$.pvOfBenefitsByRetirementYear();
    let retirementYears = this.calculations$.retirementYears;
    let monthlyBenefits = this.calculations$.monthlyBenefits;
    let accumulatedBenefits = this.calculations$.accumulatedBenefits;
    let pvOfBenefits = this.calculations$.pvOfBenefits;
  }
  
}
