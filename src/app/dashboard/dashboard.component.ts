import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';
import { TransactionService } from '../transaction.service';

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

interface data {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  transactions: any[] = [];
  public transactionsResult:any[]=[]
  public chartOptions1: any;

  public chartOptions2: any;

  data!: data[];

  years!: data[];

  selectdata!: data;

  selectedyears!: data;

  constructor(private transcation: TransactionService) {}

  ngOnInit(): void {
    this.barchart();
    this.piechart();
    this.transctiondata();
    this.days();
    this.alltranactions();
    this.transctiondata();
  }
  transctiondata() {
    this.transcation.getdata().subscribe((data) => {
      this.transactions = data;
      console.log(this.transactions);
      this.transcation.getdata().subscribe((data) => {
        this.transactions = data;
        this.transactions.filter((data)=>{
          this.transactionsResult=data.transactiosnsSixMonths
        })
      });
    });
  }

  onDropdownChange() {
    console.log(this.selectdata);
    // Check the selected option and trigger data retrieval accordingly
    if (this.selectdata.name === '6months') {
      // Handle 6 months data retrieval
      this.transcation.getdata().subscribe((data) => {
        this.transactions = data;
        this.transactions.filter((data)=>{
          this.transactionsResult=data.transactiosnsSixMonths
        })
      });
      
    } else{
      // Handle 1 year data retrieval
      this.transcation.getdata().subscribe((data) => {
        this.transactions = data;
        this.transactions.filter((data)=>{
          this.transactionsResult=data.transactiosnsOneYear
        })
      });
    }
  }

  days() {
    this.data = [
      { name: '6Months', code: 'months' },
      { name: '1Year', code: 'years' },
    ];
  }
  alltranactions() {
    this.years = [
      { name: '6months', code: 'months' },
      { name: '1Year', code: 'years' },
    ];
  }

  barchart() {
    this.chartOptions1 = {
      series: [
        {
          name: 'Income',
          data: [
            {
              x: 1996,
              y: 322,
            },
            {
              x: 1997,
              y: 324,
            },
            {
              x: 1998,
              y: 329,
            },
            {
              x: 1999,
              y: 342,
            },
            {
              x: 2000,
              y: 348,
            },
            {
              x: 2001,
              y: 334,
            },
            {
              x: 2002,
              y: 325,
            },
            {
              x: 2003,
              y: 316,
            },
            {
              x: 2004,
              y: 318,
            },
            {
              x: 2005,
              y: 330,
            },
            {
              x: 2006,
              y: 355,
            },
            {
              x: 2007,
              y: 366,
            },
            {
              x: 2008,
              y: 337,
            },
            {
              x: 2009,
              y: 352,
            },
            {
              x: 2010,
              y: 377,
            },
            {
              x: 2011,
              y: 383,
            },
            {
              x: 2012,
              y: 344,
            },
            {
              x: 2013,
              y: 366,
            },
            {
              x: 2014,
              y: 389,
            },
            {
              x: 2015,
              y: 334,
            },
          ],
        },
        {
          name: 'Outcome',
          data: [
            {
              x: 1996,
              y: 162,
            },
            {
              x: 1997,
              y: 90,
            },
            {
              x: 1998,
              y: 50,
            },
            {
              x: 1999,
              y: 77,
            },
            {
              x: 2000,
              y: 35,
            },
            {
              x: 2001,
              y: -45,
            },
            {
              x: 2002,
              y: -88,
            },
            {
              x: 2003,
              y: -120,
            },
            {
              x: 2004,
              y: -156,
            },
            {
              x: 2005,
              y: -123,
            },
            {
              x: 2006,
              y: -88,
            },
            {
              x: 2007,
              y: -66,
            },
            {
              x: 2008,
              y: -45,
            },
            {
              x: 2009,
              y: -29,
            },
            {
              x: 2010,
              y: -45,
            },
            {
              x: 2011,
              y: -88,
            },
            {
              x: 2012,
              y: -132,
            },
            {
              x: 2013,
              y: -146,
            },
            {
              x: 2014,
              y: -169,
            },
            {
              x: 2015,
              y: -184,
            },
          ],
        },
      ],
      chart: {
        type: 'area',
        height: 250,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      title: {
        text: '',
        align: 'left',
        style: {
          fontSize: '15 px',
        },
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          style: {
            color: '#8e8da4',
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {
          format: 'yyyy',
        },
        y: {
          formatter: function (value: number) {
            return '$' + Math.abs(value);
          },

          fixed: {
            enabled: false,
            position: 'topRight',
          },
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30,
            },
          },
          padding: {
            left: 20,
          },
        },
      },
    };
  }

  piechart() {
    this.chartOptions2 = {
      series: [44, 55, 41, 17],
      labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],
      chart: {
        width: 350,
        height: 200,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (
          val: string,
          opts: {
            w: {
              globals: {
                series: {
                  [x: string]: string;
                };
              };
            };
            seriesIndex: string | number;
          }
        ) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  expensesdata() {
    console.log(this.selectedyears);

    if (this.selectedyears.name === '6Months') {
      this.chartOptions2 = {
        series: [55, 40, 41, 20],
        labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],

        chart: {
          width: 350,
          height: 250,
          type: 'donut',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (
            val: string,
            opts: {
              w: {
                globals: {
                  series: {
                    [x: string]: string;
                  };
                };
              };
              seriesIndex: string | number;
            }
          ) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };
    } else {
      this.chartOptions2 = {
        series: [65, 30, 55, 15],
        labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],

        chart: {
          width: 350,
          height: 250,
          type: 'donut',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (
            val: string,
            opts: {
              w: {
                globals: {
                  series: {
                    [x: string]: string;
                  };
                };
              };
              seriesIndex: string | number;
            }
          ) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };
    }
  }
}
