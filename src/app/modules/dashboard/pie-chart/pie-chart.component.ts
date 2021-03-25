import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  pieData:any;
  constructor(private mychartService: DashboardService,private router: Router
    ) { }

  ngOnInit() {
      this.pieData = this.mychartService.pieChart();
      if(!this.pieData){
        this.router.navigate(['/dashboard/not-found']);
      }
  }

}
