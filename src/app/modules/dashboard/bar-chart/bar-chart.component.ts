import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
   barData:any;
  constructor(private mychartService: DashboardService,private router: Router
    ) { }

  ngOnInit() {
    this.barData = this.mychartService.barChart();
    if(!this.barData){
      this.router.navigate(['/dashboard/not-found']);
    }
  }

}
