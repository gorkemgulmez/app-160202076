import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Portal',
      url: '/portal',
      icon: 'grid'
    },
    {
      title: 'Player',
      url: '/player',
      icon: 'musical-notes'
    },
    {
      title: 'Randevu',
      url: '/randevu',
      icon: 'calendar'
    },
    {
      title: 'İlaçlar',
      url: '/prescribe',
      icon: 'medkit'
    },
    {
      title: 'Tahliller',
      url: '/patient-analysis',
      icon: 'clipboard'
    },
    { 
      title: 'Ameliyat',
      url: '/ameliyat',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
