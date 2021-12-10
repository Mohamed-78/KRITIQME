import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-creation-vm',
  templateUrl: './resume-creation-vm.page.html',
  styleUrls: ['./resume-creation-vm.page.scss'],
})
export class ResumeCreationVMPage implements OnInit {

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
