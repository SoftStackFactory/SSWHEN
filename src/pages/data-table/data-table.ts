// Re-usable agnostic table. x & y data fed in by parent page

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-data-table',
  templateUrl: 'data-table.html',
})

export class DataTablePage implements OnInit {

  @Input() xData: any[];
  @Input() yData: any[];
  benefitData: any[] = [];
  
  constructor() {}
  
  ngOnInit() {
        for (let i=0; i<this.xData.length; i++) {
        let item = {
          columnOne: this.xData[i],
          columnTwo: this.yData[i],
        };
      this.benefitData.push(item);
    }
  }


}
