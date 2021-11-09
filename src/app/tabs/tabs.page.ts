import { Component } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private navctrl: NavController) {}

  redirectTo_login(){
    this.navctrl.navigateForward("/login");
  }

}
