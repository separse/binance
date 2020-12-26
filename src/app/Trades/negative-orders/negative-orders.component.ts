import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-negative-orders',
  templateUrl: './negative-orders.component.html',
  styleUrls: ['./negative-orders.component.css']
})
export class NegativeOrdersComponent implements AfterViewInit {

  @ViewChild('negativeBarCanvas') negativeBarCanvas;
  barChart: any;
  constructor() { }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.negativeBarCanvas.nativeElement, {
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
