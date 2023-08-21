import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-dashboard-radar',
  templateUrl: './dashboard-radar.component.html',
  styleUrls: ['./dashboard-radar.component.css']
})
export class DashboardRadarComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [45, 55, 30, 40, 50, 30]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: "Expension Of Profit "
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
  }
}
