import { Component, OnInit } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }

  redirectTo_home(){
    this.navctrl.navigateForward("/tabs/tab1");
  }

}
