import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'component-barchart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './barchart.component.html' ,
  styleUrl: './barchart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarchartComponent {
  @ViewChild('barChart', { static: true }) chartElement!: ElementRef;
  public chartOptions: ApexOptions;
  constructor(){
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: "100%",
        width: "100%",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']

      },
      series: [{
        data: [{
          x: 'category A',
          y: 10,
          fillColor: '#003049'
        }, {
          x: 'category B',
          y: 18,
          fillColor: '#d62828'
        }, {
          x: 'category C',
          y: 13,
          fillColor: '#780000'
        },{
          x: 'category D',
          y: 6,
          fillColor: '#fcbf49'
        },]
      }]
    }
  }

  ngOnInit(): void {
    if (this.chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(this.chartElement.nativeElement, this.chartOptions as ApexOptions);
      chart.render();
    }
  }
 }
