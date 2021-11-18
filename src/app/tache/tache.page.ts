import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {

  checked: boolean = false;
  changeChecked:boolean = false;

  public toggled: boolean = false;

  constructor() { 
    this.toggled = false;
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

}
