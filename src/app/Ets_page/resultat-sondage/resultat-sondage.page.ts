import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, LineController, PieController, ArcElement, BarController, BarElement, LineElement, PointElement, LinearScale, Title,CategoryScale  } from 'chart.js';


@Component({
  selector: 'app-resultat-sondage',
  templateUrl: './resultat-sondage.page.html',
  styleUrls: ['./resultat-sondage.page.scss'],
})
export class ResultatSondagePage{

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  public ouvrir_3: boolean = false;
  public ouvrir_2: boolean = false;
  public ouvrir_1: boolean = false;

  constructor() { 
    Chart.register(LineController,PieController, 
      ArcElement, 
      BarController,
      BarElement, 
      LineElement, 
      PointElement, 
      LinearScale, 
      Title, 
      CategoryScale);

    this.ouvrir_3 = false; 
    this.ouvrir_2 = false; 
    this.ouvrir_1 = false; 
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
          borderWidth: 5,
          data: [55,45,25,15],
          backgroundColor: [
          '#1f6cff',
          '#f99600',
          '#24e081',
          '#ffc700' 

          ],
          hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384'
          ]
        }]
      },
      options: {
        cutout: 55
      }
    });
  }

  public action_3(): void {
    this.ouvrir_3 = !this.ouvrir_3;
  }

  public action_2(): void {
    this.ouvrir_2 = !this.ouvrir_2;
  }

  public action_1(): void {
    this.ouvrir_1 = !this.ouvrir_1;
  }
}
