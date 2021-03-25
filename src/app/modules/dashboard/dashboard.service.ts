import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  pieChart() {
    return [{
      name: '2020',
      y: 30.41,
      sliced: true,
      selected: true
    }, {
      name: '2015',
      y: 19.84
    }, {
      name: '2010',
      y: 8.85
    }, {
      name: '2005',
      y: 12.67
    }, {
      name: '2000',
      y: 4.67
    }];
  }

  barChart(){
    return [{
      name: '2020',
      y: 30.41,
    }, {
      name: '2015',
      y: 19.84
    }, {
      name: '2010',
      y: 8.85
    }, {
      name: '2005',
      y: 12.67
    }, {
      name: '2000',
      y: 4.67
    }];
  }

  donutChart() {
    return [{
      name: '2020',
      y: 30.41
    }, {
      name: '2015',
      y: 19.84
    }, {
      name: '2010',
      y: 8.85
    }, {
      name: '2005',
      y: 12.67
    }, {
      name: '2000',
      y: 4.67
    }];
  }

  areaChart() {
    return [{
      name: '2020',
      y: 4.67
    }, {
      name: '2015',
      y: 12.67
    }, {
      name: '2010',
      y: 8.85
    }, {
      name: '2005',
      y: 19.84
    }, {
      name: '2000',
      y: 30.41
    }];
  }

  bubbleChart(){
    
  }
}
