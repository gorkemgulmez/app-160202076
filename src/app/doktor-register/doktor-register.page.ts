import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SQLService } from '../services/sql/sql.service';
import { FirebaseService } from '../services/cloud/firebase.service';
import { AuthGuard } from '../auth/auth.guard';

@Component({
	selector: 'app-doktor-register',
	templateUrl: './doktor-register.page.html',
	styleUrls: ['./doktor-register.page.scss'],
})
export class DoktorRegisterPage implements OnInit {
	doktor_ad: string = ""
	doktor_soyad: string = ""
	doktor_klinik_turu = ""
	username: string = ""
	password: string = ""
	cpassword: string = ""

	constructor(
		private sqlService: SQLService,
		private toastCtrl: ToastController,
		private firebaseService: FirebaseService,
		public router: Router,
		public modalController: ModalController,
		private location: Location,
		private authGuard: AuthGuard
	) { }

	ngOnInit() { }

	CreateRecord() {
		let tam_ad = this.doktor_ad + ' ' + this.doktor_soyad;
		let record = { doctor_name: tam_ad, password: this.password, clinic_name: this.doktor_klinik_turu };
		this.createDoctor("INSERT INTO doctors (username, doctor_name, clinic_id, d_password) VALUES ('" + this.username + "', '" + tam_ad + "', '" + "', '" + this.doktor_klinik_turu + "', '" + this.password + "')");


		this.firebaseService.create('doctors', this.username, record).then(resp => {
			this.authGuard.login(this.username);
			console.log(resp);
			this.location.back();

		})
			.catch(error => {
				console.log(error);
			});
	}

	private createDoctor(sql: string) {
		this.sqlService.db.executeSql(sql, {})
			.then((res) => {
				this.presentToast('İşlem başarılı.');
				this.location.back();
			})
			.catch(e => {
				this.presentToast('Eksik veya yanlış giriş yaptınız.');
			});
	}

	async presentToast(message: string) {
		const toast = await this.toastCtrl.create({
			message: message,
			position: 'bottom',
			duration: 1000,
		});
		toast.present();
	}

	async register() {
		
		if (this.password !== this.cpassword) {
			this.presentToast('Şifreler Uyuşmuyor')
		}
		else if (this.username == "" || this.password == "" || this.doktor_ad == "" || this.doktor_soyad == "") {
			this.presentToast('Alanlar Doldurulmalı')
		}
		else {
			this.CreateRecord();
		}
	}
}
