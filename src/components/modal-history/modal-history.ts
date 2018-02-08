import { Component } from '@angular/core';
import {AlertController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalHistoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-history',
  templateUrl: 'modal-history.html'
})
export class ModalHistoryComponent {
  background: string;
  data = 'monthly';

  constructor(private navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {

  }

  ngOnInit() {
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


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
