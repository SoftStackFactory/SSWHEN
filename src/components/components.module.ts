import { NgModule } from '@angular/core';
import { ChartComponent } from './charts/charts';
import { LangaugePopoverComponent } from './langauge-popover/langauge-popover';
import { ModalHistoryComponent } from './modal-history/modal-history';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard';


@NgModule({
	declarations: [ChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent],
	imports: [],
	exports: [ChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent]
})
export class ComponentsModule {}
