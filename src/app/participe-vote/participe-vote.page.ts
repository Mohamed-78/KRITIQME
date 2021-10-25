import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participe-vote',
  templateUrl: './participe-vote.page.html',
  styleUrls: ['./participe-vote.page.scss'],
})
export class ParticipeVotePage implements OnInit {

  public toggled: boolean = false;

  public selectedSegmentTous: string = 'tous'
  public selectedSegmentMondaine: string = 'mondaine'
  public selectedSegmentPolitique: string = 'politique'
  public selectedSegmentEntpsePublique: string = 'entpseP'
  public selectedSegmentEntpsePrivee: string = 'entpsePr'

  constructor() {
     this.toggled = false;
   }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
      console.log(ev.target.value);
      this.selectedSegmentTous = ev.target.value
      this.selectedSegmentMondaine = ev.target.value
      this.selectedSegmentEntpsePublique = ev.target.value
      this.selectedSegmentEntpsePrivee = ev.target.value
      this.selectedSegmentPolitique = ev.target.value
    }

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
