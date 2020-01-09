import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoktorRegisterPage } from './doktor-register.page';

const routes: Routes = [
  {
    path: '',
    component: DoktorRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoktorRegisterPage]
})
export class DoktorRegisterPageModule {}
