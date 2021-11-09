import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public toggled: boolean = false;

  constructor() {this.toggled = false;}

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  cancelSearch($event){
    this.toggle();
  }

  onChange($event) {
    console.log($event);
  }


}
