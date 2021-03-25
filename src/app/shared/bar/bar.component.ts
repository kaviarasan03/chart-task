import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent  {

  highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'bar'
      },
      title: {
        text: 'Population Increase Percentage'
      }, legend : {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 100,
        floating: true,
        borderWidth: 1,
       
        backgroundColor: (
           (Highcharts.theme) || 
             '#FFFFFF'), shadow: true
        },
        xAxis:{
           categories: ['2020', '2015', '2010', '2005', '2000'], title: {
           text: null
        } 
     },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        bar: {
          dataLabels: {
             enabled: true
          }
       }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Percentage',
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
