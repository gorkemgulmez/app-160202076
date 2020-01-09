import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*
  authState->false ==>not logged in
  authState->true & doctorState->false ==> patient
  doctorState->true ==> doctor
  */
  authState = false;
  doctorState = false;

  constructor(private platform: Platform,
    private strorage: Storage
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authState;
  }

  ifLoggedIn() {
    this.strorage.get('USER_ID').then((response) => {
      if (response) {
        this.authState = true;
      }
    });
  }

  login(id: string): void {
    this.strorage.set('USER_ID', id).then((response) => {
      this.authState = true;
      //if id is patient number
      if (id.length == 11 && parseInt(id) != NaN) {
        this.doctorState = true;
        this.authState = true;
      }
    });
  }

  logout(): void {
    this.strorage.remove('USER_ID').then(() => {
      this.authState = false;
      this.doctorState = false;
    });
  }

  isPatient(): boolean {
    return this.authState && !this.doctorState;
  }

  isDoctor(): boolean {
    return this.doctorState;
  }

}
