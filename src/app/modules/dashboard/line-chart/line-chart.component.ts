import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  areaData:any;
  constructor(private mychartService: DashboardService,private router: Router
    ) { }

  ngOnInit() {
    this.areaData = this.mychartService.areaChart();
    if(!this.areaData){
      this.router.navigate(['/dashboard/not-found']);
    }
  }
}