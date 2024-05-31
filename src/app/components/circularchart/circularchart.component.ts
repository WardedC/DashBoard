import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'component-circularchart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './circularchart.component.html',
  styleUrl: './circularchart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularchartComponent implements OnInit {

  ngOnInit(): void {
    if (this.chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(this.chartElement.nativeElement, this.chartOptions as ApexOptions);
      chart.render();
    }
  }

  @ViewChild('donutchart', { static: true }) chartElement!: ElementRef;
  public chartOptions: ApexOptions;

  constructor() {
    this.chartOptions = {

      series: [35.1, 23.5, 2.4, 5.4],
      chart: {
        type: 'donut',
        height: 150,
        width: '200'
      },
      colors: ['#003049', '#c1121f', '#fdf0d5', '#e63946'],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: 20
              },
              total: {
                showAlways: true,
                show: false,
                label: 'Unique visitors',
                fontFamily: 'Inter, sans-serif',
                color: '#2ec4b6',
                
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
                  return '$' + sum + 'k';
                }
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                fontSize: '1',
                offsetY: -10,
                formatter: function (value) {
                  return value + 'k';
                }
              }
            },
            size: '70%'
          }
        }
      },
      stroke: {
        colors: ['transparent'],
        
      },
      grid: {
        padding: {
          top: -2
        }
      },
      labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        position: 'bottom',
        fontFamily: 'Inter, sans-serif'
      }
    };
  }


}
