import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { LangaugePopoverComponent } from './langauge-popover/langauge-popover';
@NgModule({
	declarations: [BarChartComponent,
    LangaugePopoverComponent],
	imports: [],
	exports: [BarChartComponent,
    LangaugePopoverComponent]
})
export class ComponentsModule {}
