import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController} from 'ionic-angular';
import { PopoverPage } from './popover-page';
import { ModalPage } from './modal-page';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
