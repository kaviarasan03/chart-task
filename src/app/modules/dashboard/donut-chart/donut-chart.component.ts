import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  donutData:any;
  constructor(private mychartService: DashboardService,private router: Router
    ) { }

  ngOnInit() {
    this.donutData = this.mychartService.donutChart();
    if(!this.donutData){
      this.router.navigate(['/dashboard/not-found']);
    }
  }

}
