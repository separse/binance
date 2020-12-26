import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBookComponent implements AfterViewInit {

  @ViewChild('positiveBarCanvas') positiveBarCanvas;
  barChart: any;
  constructor() { }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.positiveBarCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {

        labels: ['', '', '', '', '' ],
        datasets: [{

          label: '',
          data: [50, 30, 15, 20, 34],
          backgroundColor: [
            'green',
            'green',
            'green',
            'green',
            'green'
          ],
          borderColor: [
            'black',
            'black',
            'black',
            'black',
            'black'
          ],
          borderWidth: 1
        }]
      },
      options: Chart.defaults.horizontalBar
    });
  }
}
