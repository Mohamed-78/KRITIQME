import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creervme3',
  templateUrl: './creervme3.page.html',
  styleUrls: ['./creervme3.page.scss'],
})
export class Creervme3Page implements OnInit {


  public toggled: boolean = false;
  public toggled_Qthree: boolean = false;
  public toggled_Qfour: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  public toggle_three():void{
    this.toggled_Qthree = !this.toggled_Qthree;
  }

  public toggle_four():void{
    this.toggled_Qfour = !this.toggled_Qfour;
  }

}
