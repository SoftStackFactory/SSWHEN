import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LangaugePopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'langauge-popover',
  templateUrl: 'langauge-popover.html'
})
export class LangaugePopoverComponent {

  contentEle: any;
  textEle: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log('Hello LangaugePopoverComponent Component');
  }

  ngOnInit() {
    if (this.params.data) {
      this.contentEle = this.params.data.contentEle;
      this.textEle = this.params.data.textEle;
    }
  }

  changeFontSize(direction: string) {
    console.log('Direction:', direction);
    console.log('Content:', this.textEle);
    this.textEle.style.fontSize = direction;
  }

}
