import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  constructor(
    private platform: Platform,
    private splashscreen: SplashScreen,
    private statusbar: StatusBar
    ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() =>{
      this.statusbar.styleDefault();
      this.splashscreen.show();
      timer(3500).subscribe(() => this.showSplash = false);
    });
  }
}
