import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart';
import { ChartsComponent } from './charts/charts';
import { MonthlyComponent } from './monthly/monthly';
import { CumulativeComponent } from './cumulative/cumulative';
import { PresentValueComponent } from './present-value/present-value';
@NgModule({
	declarations: [BarChartComponent, ChartsComponent,
    MonthlyComponent,
    CumulativeComponent,
    PresentValueComponent],
	imports: [],
	exports: [BarChartComponent, ChartsComponent,
    MonthlyComponent,
    CumulativeComponent,
    PresentValueComponent]
})
export class ComponentsModule {}
