import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
//import { CrudService } from '../doktor-register/crud.service';

@Component({
  selector: 'app-doktor-register',
  templateUrl: './doktor-register.page.html',
  styleUrls: ['./doktor-register.page.scss'],
})
export class DoktorRegisterPage implements OnInit {
  doktor_ad:string = ""
  doktor_soyad:string = ""
  doktor_klinik_turu = ""
  username: string = ""
	password: string = ""
	cpassword: string = ""

	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public router: Router,
		public modalController: ModalController,
		//public crudService: CrudService
		) { }

	ngOnInit() {
	}
	CreateRecord() {
		let record = {};
		record['username'] = this.username;
		record['password'] = this.password;
		record['doktor_ad'] = this.doktor_ad;
		record['doktor_soyad'] = this.doktor_soyad;
		record['doktor_klinik_turu'] = this.doktor_klinik_turu;
		/*this.crudService.create_NewDoctor(record).then(resp => {
		  this.username = "".trim()+'@codedamn.com';
		  this.password = "";
		  this.doktor_ad = "";
		  this.doktor_soyad = "";
		  this.doktor_klinik_turu = "";
		  console.log(resp);
		})
		  .catch(error => {
			console.log(error);
		  });*/
	  }
	async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
			return console.error("Passwords don't match")
		}
			this.CreateRecord();
			
	}
}
