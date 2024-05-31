import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

export type ChartOptions = {
   series: ApexAxisChartSeries;
   chart: ApexChart;
   dataLabels: ApexDataLabels;
   markers: ApexMarkers;
   title: ApexTitleSubtitle;
   fill: ApexFill;
   yaxis: ApexYAxis;
   xaxis: ApexXAxis;
   tooltip: ApexTooltip;
};

@Component({
    selector: 'component-linealchart',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './linealchart.component.html',
    styleUrl: './linealchart.component.css',

})



export class LinealchartComponent implements OnInit {
  @ViewChild('areaChart', { static: true }) chartElement!: ElementRef;
  public chartOptions: ApexOptions;
  constructor(){
    this.chartOptions = {
      chart: {
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#FF2401", // Cambia a rojo
          gradientToColors: ["#FF2401"], // Cambia a rojo
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
        colors: ["#FF2401"] // Cambia a rojo
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456, 6600, 6500, 6700],
          color: "#FF2401", // Cambia a rojo
        },
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  }

  ngOnInit(): void {
    if (this.chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(this.chartElement.nativeElement, this.chartOptions as ApexOptions);
      chart.render();
    }
  }




}






