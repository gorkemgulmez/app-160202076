import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doktor-login',
  templateUrl: './doktor-login.page.html',
  styleUrls: ['./doktor-login.page.scss'],
})
export class DoktorLoginPage implements OnInit {
  username: string = ""
	password: string = ""
	dataReturned:any;
	constructor(private afAuth: AngularFireAuth , private router:Router,public modalController: ModalController){
	}
	ngOnInit() {
	}
	async login() {
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username.trim() + '@codedamn.com', password);
			if (res) {
				console.log("Successfully logged in!");
				this.router.navigateByUrl('/home');
			  }
		} 
		  catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found");
			}
		}
	}

}
