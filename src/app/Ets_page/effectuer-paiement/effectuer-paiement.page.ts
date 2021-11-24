import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effectuer-paiement',
  templateUrl: './effectuer-paiement.page.html',
  styleUrls: ['./effectuer-paiement.page.scss'],
})
export class EffectuerPaiementPage implements OnInit {

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
