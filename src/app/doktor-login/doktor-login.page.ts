import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Location } from "@angular/common";
import { SQLService } from '../services/sql/sql.service';
import { AuthGuard } from '../auth/auth.guard';

@Component({
	selector: 'app-doktor-login',
	templateUrl: './doktor-login.page.html',
	styleUrls: ['./doktor-login.page.scss'],
})
export class DoktorLoginPage implements OnInit {
	username: string = ""
	password: string = ""
	dataReturned: any;

	constructor(private afAuth: AngularFireAuth,
		private router: Router,
		public modalController: ModalController,
		private location: Location,
		private sqlService: SQLService,
		private authGuard: AuthGuard,
		private toastCtrl: ToastController
	) { }

	ngOnInit() { }

	async login() {
		const { username, password } = this
		if (username == "" || password == "") {
			this.presentToast('Alanlar Doldurulmalı')
		}
		else {
			this.loginAccount();
		}
	}

	loginAccount() {
		let sql: String = 'SELECT username FROM doctors WHERE doctors.username= \'' + this.username + '\' and doctors.d_password= \'' + this.password + '\'';
		console.log("log");

		this.sqlService.db.executeSql(sql, {}).then((rs: any, st) => {
			this.sqlService.asArray(rs).then((list) => {
				console.log(list);
				if (list.length > 0) {
					console.log("name : " + this.username);
					
					this.authGuard.login(this.username);
					this.location.back();
				}
				else {
					console.log("hatalı");
					
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
