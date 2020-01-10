import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/cloud/firebase.service';
import { SQLService } from '../services/sql/sql.service';
import { Location } from '@angular/common';
import { AuthGuard } from '../auth/auth.guard';

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
		private sqlService: SQLService,
		private location: Location,
		private authGuard: AuthGuard
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
		let sql: String = 'SELECT * FROM patients WHERE tc_no= ' + this.hasta_tc + ' and p_password= ' + this.password;
		console.log("log");
		
		this.sqlService.db.executeSql(sql, []).then((rs: any) => {
			console.log(rs);
			
			this.sqlService.asArray(rs).then((list) => {
				console.log(list);
				
				if(list.length>0) {
					this.authGuard.login(this.hasta_tc);
					this.location.back();
				}
				else {
					this.presentToast("Hatalı Kullanıcı Adı veya Şifre")
				}
			})
		})
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
