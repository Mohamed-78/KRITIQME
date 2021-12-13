import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat-mission-vm',
  templateUrl: './resultat-mission-vm.page.html',
  styleUrls: ['./resultat-mission-vm.page.scss'],
})
export class ResultatMissionVmPage implements OnInit {


  public ouvrir_3: boolean = false;
  public ouvrir_2: boolean = false;
  public ouvrir_1: boolean = false;

  constructor() { 
    this.ouvrir_3 = false; 
    this.ouvrir_2 = false; 
    this.ouvrir_1 = false;
  }

  ngOnInit() {
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
