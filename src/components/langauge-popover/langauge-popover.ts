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

  queryEle: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ngOnInit() {
    if (this.params.data) {
      this.queryEle = this.params.data.queryEle;
    }
  }

  changeFontSize(direction: string) {
    for (let i = 0;i<this.queryEle.length;i++) {
      // console.log('Position:', this.queryEle[i]);
      this.queryEle[i].nativeElement.style.fontSize = direction;
    }
  }

}
