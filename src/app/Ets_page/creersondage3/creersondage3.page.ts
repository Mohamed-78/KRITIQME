import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChoixMultipleComponent } from '../choix-multiple/choix-multiple.component';

@Component({
  selector: 'app-creersondage3',
  templateUrl: './creersondage3.page.html',
  styleUrls: ['./creersondage3.page.scss'],
})
export class Creersondage3Page implements OnInit {

  public toggled: boolean = false;
  public toggled_task_3: boolean = false;
  public toggled_task_4: boolean = false;
  public toggled_task_5: boolean = false;
  public toggled_task_6: boolean = false;
  public toggled_task_7: boolean = false;
  public toggled_task_8: boolean = false;
  public toggled_task_9: boolean = false;
  public toggled_task_10: boolean = false;
  public toggled_task_11: boolean = false;
  public toggled_task_12: boolean = false;
  public toggled_task_13: boolean = false;
  public toggled_task_14: boolean = false;
  public toggled_task_15: boolean = false;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

   async choix_multiple(selectedValue: any) {
    const modalCtrl = await this.modalCtrl.create({
      component: ChoixMultipleComponent,
      cssClass: 'transparent-modal'
    });
    await modalCtrl.present();
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  public toggle_task_3():void{
    this.toggled_task_3 = !this.toggled_task_3;
  }

  public toggle_task_4():void{
    this.toggled_task_4 = !this.toggled_task_4;
  }

  public toggle_task_5():void{
    this.toggled_task_5 = !this.toggled_task_5;
  }

  public toggle_task_6():void{
    this.toggled_task_6 = !this.toggled_task_6;
  }

  public toggle_task_7():void{
    this.toggled_task_7 = !this.toggled_task_7;
  }

  public toggle_task_8():void{
    this.toggled_task_8 = !this.toggled_task_8;
  }

  public toggle_task_9():void{
    this.toggled_task_9 = !this.toggled_task_9;
  }

  public toggle_task_10():void{
    this.toggled_task_10 = !this.toggled_task_10;
  }

  public toggle_task_11():void{
    this.toggled_task_11 = !this.toggled_task_11;
  }

  public toggle_task_12():void{
    this.toggled_task_12 = !this.toggled_task_12;
  }


  public toggle_task_13():void{
    this.toggled_task_13 = !this.toggled_task_13;
  }

  public toggle_task_14():void{
    this.toggled_task_14 = !this.toggled_task_14;
  }

  public toggle_task_15():void{
    this.toggled_task_15 = !this.toggled_task_15;
  }


}
