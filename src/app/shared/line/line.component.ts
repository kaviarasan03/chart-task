import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent{

  highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column'
     },
      title: {
        text: 'Population Increase Percentage'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{series.data.y:.1f}%</b>'
      },
      xAxis:{
        categories: ['2000','2005','2010','2015','2020'],
        crosshair: true        
     },     
     yAxis : {
        min: 0,
        title: {
           text: 'Percentage'         
        }      
     },
      legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (
           Highcharts.theme ) || '#FFFFFF'
     },
     plotOptions : {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Increase Percent',
        colorByPoint: true,
        data: this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
