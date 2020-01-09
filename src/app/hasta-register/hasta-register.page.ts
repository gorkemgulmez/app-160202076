import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/cloud/firebase.service';
import { ToastController } from '@ionic/angular';
import { SQLService } from '../services/sql/sql.service';

@Component({
	selector: 'app-hasta-register',
	templateUrl: './hasta-register.page.html',
	styleUrls: ['./hasta-register.page.scss'],
})
export class HastaRegisterPage implements OnInit {
	hasta_ad: string = ""
	hasta_soyad: string = ""
	hasta_tc: string = "";
	password: string = ""
	cpassword: string = ""

	constructor(
		public router: Router,
		private toastCtrl: ToastController,
		private firebaseService: FirebaseService,
		private sqlService: SQLService
	) { }

	ngOnInit() {
	}

	CreateRecord() {
		let tam_ad = this.hasta_ad + ' ' + this.hasta_soyad
		let record = { patient_name: tam_ad, password: this.password };
		this.createPatient("INSERT INTO patients (tc, patient_name, p_password) VALUES ('" + this.hasta_tc + "', '" + tam_ad + "', '" + this.password + "')");


		this.firebaseService.create('patients', this.hasta_tc, record).then(resp => {
			this.hasta_ad = "";
			this.password = "";
			this.hasta_soyad = "";
			this.hasta_tc = "";
			this.password = "";
			console.log(resp);

		})
			.catch(error => {
				console.log(error);
			});
	}

	private createPatient(sql: string) {
		this.sqlService.db.executeSql(sql, {})
			.then((res) => {
				this.presentToast('İşlem başarılı.');
			})
			.catch(e => {
				this.presentToast('Eksik veya yanlış giriş yaptınız.');
			});
	}

	async register() {
		const { hasta_tc, password, cpassword, hasta_ad, hasta_soyad } = this
		if (password !== cpassword) {
			this.presentToast('Şifreler Uyuşmuyor')
		}
		else if (hasta_tc == "" || password == "" || hasta_ad == "" || hasta_soyad == "") {
			this.presentToast('Alanlar Doldurulmalı')
		}
		else if (hasta_tc.length !== 11) {
			this.presentToast('TC Kimlik No 11 Haneli Olmalı')
		}
		else {
			this.CreateRecord();
		}
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
