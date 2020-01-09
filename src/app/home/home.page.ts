import { Component } from '@angular/core';
import { SQLService } from '../services/sql/sql.service';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  portals = [];

  constructor(private sqlService: SQLService,
    private authGuard: AuthGuard) { }

  isAuthenticated() {
    return this.authGuard.canActivate(null, null);
  }

  isPatient() {
    return this.authGuard.isPatient();
  }

  isDoctor() {
    return this.authGuard.isDoctor()
  }

}
