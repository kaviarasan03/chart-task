import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {
  bubbleData:any;
  constructor(private mychartService: DashboardService,private router: Router
    ) { }

  ngOnInit() {
    this.bubbleData = this.mychartService.bubbleChart();
    if(!this.bubbleData){
      this.router.navigate(['/dashboard/not-found']);
    }
  }

}