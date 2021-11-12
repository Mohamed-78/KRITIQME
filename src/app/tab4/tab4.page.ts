import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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
