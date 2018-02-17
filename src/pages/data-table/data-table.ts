// Re-usable agnostic table. x & y data fed in by parent page

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-data-table',
  templateUrl: 'data-table.html',
})

export class DataTablePage implements OnInit {

  @Input() leftCol: any[];
  @Input() leftColTitle: string;
  @Input() rightCol: any[];
  @Input() rightColTitle: string;
  benefitData: any[] = [];
  
  constructor() {}
  
  ngOnInit() {
        for (let i=0; i<this.leftCol.length; i++) {
        let item = {
          columnOne: this.leftCol[i],
          columnTwo: this.rightCol[i],
        };
      this.benefitData.push(item);
    }
  }

}
