import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { DonutComponent } from './donut/donut.component';
import { HighchartsChartModule } from 'highcharts-angular';

const SharedComponents = [
  PieComponent,
  BarComponent,
  LineComponent,
  DonutComponent,
]

@NgModule({
  declarations: [PieComponent, 
    BarComponent, 
    LineComponent, 
    DonutComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    SharedComponents,
  ]
})
export class SharedModule { }
