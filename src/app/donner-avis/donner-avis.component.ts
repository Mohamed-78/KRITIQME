import { Component, OnInit } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-donner-avis',
  templateUrl: './donner-avis.component.html',
  styleUrls: ['./donner-avis.component.scss'],
})
export class DonnerAvisComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private navctrl: NavController) { }

  ngOnInit() {}

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  redirectTo_avis(){
    this.modalCtrl.dismiss();
    this.navctrl.navigateForward("/avis");
  }

  redirectBack(){
    this.modalCtrl.dismiss();
    this.navctrl.navigateForward("/participe-vote");
  }

}
