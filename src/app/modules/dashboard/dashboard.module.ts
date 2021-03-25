import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './not-found/not-found.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'pie', component: PieChartComponent },
      { path: 'bar', component: BarChartComponent },
      { path: 'donut', component: DonutChartComponent },
      { path: 'line', component: LineChartComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'bubble', component: BubbleChartComponent },

    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent, 
    PieChartComponent, 
    BarChartComponent, 
    DonutChartComponent, 
    LineChartComponent, NotFoundComponent, BubbleChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HighchartsChartModule,
    ChartsModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
