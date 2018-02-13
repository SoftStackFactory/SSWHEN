import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalDashboardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-dashboard',
  templateUrl: 'modal-dashboard.html'
})
export class ModalDashboardComponent {
  background: string;

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {

  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
