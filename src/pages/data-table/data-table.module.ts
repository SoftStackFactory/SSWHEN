import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataTablePage } from './data-table';

@NgModule({
  declarations: [
    DataTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DataTablePage),
  ],
})
export class DataTablePageModule {}
