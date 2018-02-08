import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { LangaugePopoverComponent } from './langauge-popover/langauge-popover';
import { ModalHistoryComponent } from './modal-history/modal-history';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard';
@NgModule({
	declarations: [BarChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent],
	imports: [],
	exports: [BarChartComponent,
    LangaugePopoverComponent,
    ModalHistoryComponent,
    ModalDashboardComponent]
})
export class ComponentsModule {}
