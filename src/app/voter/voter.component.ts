import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DonnerAvisComponent } from  '../donner-avis/donner-avis.component';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss'],
})
export class VoterComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async question() {
    this.modalCtrl.dismiss();
    const modalCtrl = await this.modalCtrl.create({
      component: DonnerAvisComponent
    });
    await modalCtrl.present();
  }


}
