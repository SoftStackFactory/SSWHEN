import {Component, ElementRef, ViewChild,  ViewChildren, QueryList} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PopoverPage} from './popover-page';
import {ModalPage} from './modal-page';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';

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
  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
  @ViewChildren('changeText') components:QueryList<any>;
  data = 'monthly';
  editable = false;
  langElements = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    console.log('Querylist:', this.components);
  }
  ionViewDidEnter() {
  }

  isEditable() {
    if (this.editable = false) {
      this.editable = true;
    } else {
      this.editable = false;
    }
    console.log("editable clicked");
  }

  presentLanguagePopover(myEvent) {
    let popover = this.popoverCtrl.create(LangaugePopoverComponent, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement,
      queryEle: this.components
    });
    console.log('Content:', this.content.nativeElement);
    popover.present({
      ev: myEvent
    });
  }

  presentAccountPopover(myEvent) {
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
