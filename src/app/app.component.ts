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
      title: 'Ana Sayfa',
      url: '/home',
      icon: 'home'
    },
    /*{
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
    },*/
    {
      title: 'Randevu',
      url: '/appointment',
      icon: 'calendar'
    },
    {
      title: 'İlaç İşlemleri',
      url: '/prescribe',
      icon: 'medkit'
    },
    {
      title: 'İlaçlarım',
      url: '/patient-medicine',
      icon: 'medkit'
    },
    {
      title: 'Tahlil İşlemleri',
      url: '/add-analysis',
      icon: 'clipboard'
    },
    {
      title: 'Tahlillerim',
      url: '/patient-analysis',
      icon: 'clipboard'
    },
    { 
      title: 'Ameliyatlarım',
      url: '/ameliyat',
      icon: 'people'
    },
    {
      title: 'Ameliyat Ekle',
      url: '/ameliyat/add',
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
