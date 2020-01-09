import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/cloud/firebase.service';
import { SQLService } from '../services/sql/sql.service';

@Component({
	selector: 'app-hasta-login',
	templateUrl: './hasta-login.page.html',
	styleUrls: ['./hasta-login.page.scss'],
})
export class HastaLoginPage implements OnInit {
	hasta_tc: string = "";
	password: string = ""
	dataReturned: any;

	constructor(
		private router: Router,
		private toastCtrl: ToastController,
		private firebaseService: FirebaseService,
		private sqlService: SQLService
	) {
		this.sqlService.getDbState().subscribe(ready => {
			if(ready) {
				this.sqlService.db.executeSql('SELECT * FROM patients', {}).then((rs: any) => {
					console.log("rs");
					console.log(rs);
					this.sqlService.asArray(rs).then(list => {
						console.log(list);
						
					})
				});
			}
		})
		
	}

	ngOnInit() { }

	async login() {
		const { hasta_tc, password } = this
		if (password !== password) {
			this.presentToast('Şifreler Uyuşmuyor')
		}
		else if (hasta_tc == "" || password == "") {
			this.presentToast('Alanlar Doldurulmalı')
		}
		else if (hasta_tc.length !== 11) {
			this.presentToast('TC Kimlik No 11 Haneli Olmalı')
		}
		else {
			this.loginAccount();
		}
	}

	loginAccount() {
		
	}

	async presentToast(message: string) {
		const toast = await this.toastCtrl.create({
			message: message,
			position: 'bottom',
			duration: 1000,
		});
		toast.present();
	}
}
