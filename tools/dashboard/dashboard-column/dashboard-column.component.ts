import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-dashboard-column',
  templateUrl: './dashboard-column.component.html',
  styleUrls: ['./dashboard-column.component.css']
})
export class DashboardColumnComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "First Q. Profit",
          data: [44, 33, 53, 70, 55, 57, 56, 61, 58, 63, 40, 66]
        },
        {
          name: "Sec. Q. Profit",
          data: [48, 23, 33, 75, 45, 37, 50, 68, 48, 83, 55, 56]
        },
        {
          name: "Third Q. Profit",
          data: [76, 70, 80, 115, 85, 101, 98, 87, 105, 91, 50, 94]
        },
        {
          name: "Fourth Q. Profit",
          data: [35, 41, 40, 34, 56, 36, 26, 45, 48, 52, 23, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["black"]
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        title: {
          text: "Profit Value"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Profit: " + val;
          }
        }
      }
    };
  }
}
