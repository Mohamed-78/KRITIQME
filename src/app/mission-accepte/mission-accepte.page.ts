import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-accepte',
  templateUrl: './mission-accepte.page.html',
  styleUrls: ['./mission-accepte.page.scss'],
})
export class MissionAcceptePage implements OnInit {

  public toggled: boolean = false;

  public selectedSegmentTous: string = 'tous'
  public selectedSegmentVisite: string = 'vm'
  public selectedSegmentSondage: string = 'sr'

  constructor() {
    this.toggled = false;
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegmentTous = ev.target.value
    this.selectedSegmentVisite = ev.target.value
    this.selectedSegmentSondage = ev.target.value
  }

}
