import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import {LangaugePopoverComponent} from '../../components/langauge-popover/langauge-popover';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  @ViewChildren('changeText',  {read: ElementRef}) components: QueryList<ElementRef>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  presentLanguagePopover(myEvent) {
    let popover = this.popoverCtrl.create(LangaugePopoverComponent, {
      queryEle: this.components.toArray()
    });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HistoryPage');
  }

}
