import { NgModule } from '@angular/core';
import { ChartComponent } from './charts/charts';
import { LangaugePopoverComponent } from './langauge-popover/langauge-popover';
import { ModalHistoryComponent } from './modal-history/modal-history';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard';
import { TableComponent } from './table/table';


@NgModule({
	declarations: [ChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent,
    TableComponent],
	imports: [],
	exports: [ChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent,
    TableComponent]
})
export class ComponentsModule {}
