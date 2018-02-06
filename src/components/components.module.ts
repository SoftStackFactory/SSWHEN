import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { ChartsComponent } from './charts/charts';
@NgModule({
	declarations: [BarChartComponent, ChartsComponent],
	imports: [],
	exports: [BarChartComponent, ChartsComponent]
})
export class ComponentsModule {}
