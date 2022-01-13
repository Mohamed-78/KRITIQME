import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, LineController, PieController, ArcElement, BarController, BarElement, LineElement, PointElement, LinearScale, Title,CategoryScale  } from 'chart.js';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.page.html',
  styleUrls: ['./single-page.page.scss'],
})
export class SinglePagePage{

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor() { 
    Chart.register(LineController,PieController, ArcElement, BarController,BarElement, LineElement, PointElement, LinearScale, Title, CategoryScale);
  }


  ionViewDidEnter() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['BJP', 'Congress'],
        datasets: [{
          label: 'Sondage',
          borderWidth: 6,
          data: [90,10],
          backgroundColor: [
          '#24e081',
          '#dd0000',
          ],
          hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384'
          ]
        }]
      },
      options: {
        cutout: 50
      }
    });
  }

  
}
