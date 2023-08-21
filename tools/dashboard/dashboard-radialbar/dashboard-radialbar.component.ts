import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-dashboard-radialbar',
  templateUrl: './dashboard-radialbar.component.html',
  styleUrls: ['./dashboard-radialbar.component.css']
})
export class DashboardRadialbarComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [80, 30, 55, 15],
      chart: {
        height: 370,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "25px"
            },
            value: {
              fontSize: "18px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w: any) {
                return "180";
              }
            }
          }
        }
      },
      labels: ["Software Dev.", "Quality Test.", "Doc.Team", "Project Man."]
    };
  }
}
