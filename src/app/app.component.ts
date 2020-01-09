import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthGuard } from './auth/auth.guard';
import { Router } from '@angular/router';
import { FirebaseService } from './services/cloud/firebase.service';
import { SQLService } from './services/sql/sql.service';

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
      title: 'Ameliyatlar',
      url: '/ameliyat',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authGuard: AuthGuard,
    private router: Router,
    private firebaseService: FirebaseService,
    private sqlService: SQLService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Read tables
      this.firebaseService.read('patients').subscribe(result => {
        result.forEach(el => {
          let sql = "INSERT INTO patients (tc_no, patient_name, p_password) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_name') + "', '" + el.payload.doc.get('password') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('doctors').subscribe(result => {
        result.forEach(el => {
          let sql = "INSERT INTO doctors (username, doctor_name, clinic_id, d_password) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('doctor_name') + "', '" + el.payload.doc.get('clinic_id') + "', '" + el.payload.doc.get('password') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('appointments').subscribe(result => {
        result.forEach(el => {          
          let sql = "INSERT INTO appointments (id, patient_id, doctor_id, appointment_time) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_id') + "', '" + el.payload.doc.get('doctor_id') + "', '" + el.payload.doc.get('appointment_time') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('clinics').subscribe(result => {
        result.forEach(el => {
          let sql = "INSERT INTO clinics (id, clinic_name) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('clinic_name') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      /*this.firebaseService.read('analyzes').subscribe(result => {
        console.log(result);
        
        result.forEach(el => {
          console.log(el.payload.doc.id + " "  + el.payload.doc.get('patient_id') + " " + el.payload.doc.get('doctor_id')  + " " +el.payload.doc.get('appointment_time'));
          
          let sql = "INSERT INTO appointments (id, patient_id, doctor_id, appointment_time) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_id') + "', '" + el.payload.doc.get('doctor_id') + "', '" + el.payload.doc.get('appointment_time') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('doctor_vacations').subscribe(result => {
        console.log(result);
        
        result.forEach(el => {
          console.log(el.payload.doc.id + " "  + el.payload.doc.get('patient_id') + " " + el.payload.doc.get('doctor_id')  + " " +el.payload.doc.get('appointment_time'));
          
          let sql = "INSERT INTO appointments (id, patient_id, doctor_id, appointment_time) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_id') + "', '" + el.payload.doc.get('doctor_id') + "', '" + el.payload.doc.get('appointment_time') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('medicines').subscribe(result => {
        console.log(result);
        
        result.forEach(el => {
          console.log(el.payload.doc.id + " "  + el.payload.doc.get('patient_id') + " " + el.payload.doc.get('doctor_id')  + " " +el.payload.doc.get('appointment_time'));
          
          let sql = "INSERT INTO appointments (id, patient_id, doctor_id, appointment_time) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_id') + "', '" + el.payload.doc.get('doctor_id') + "', '" + el.payload.doc.get('appointment_time') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });
      this.firebaseService.read('surgeons').subscribe(result => {
        console.log(result);
        
        result.forEach(el => {
          console.log(el.payload.doc.id + " "  + el.payload.doc.get('patient_id') + " " + el.payload.doc.get('doctor_id')  + " " +el.payload.doc.get('appointment_time'));
          
          let sql = "INSERT INTO appointments (id, patient_id, doctor_id, appointment_time) VALUES ('" + el.payload.doc.id + "', '" + el.payload.doc.get('patient_id') + "', '" + el.payload.doc.get('doctor_id') + "', '" + el.payload.doc.get('appointment_time') + "')";
          console.log(sql);
          this.insert(sql);
        });
      });*/
      
    });

    
  }

  private insert(sql: String) {
    this.sqlService.db.executeSql(sql)
      .then((res) => {
      })
      .catch(e => {
      });
  }

}
