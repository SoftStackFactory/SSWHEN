import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LangaugePopoverComponent Component');
    this.text = 'Hello World';
  }

}
