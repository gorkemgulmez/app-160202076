import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HastaRegisterPage } from './hasta-register.page';

const routes: Routes = [
  {
    path: '',
    component: HastaRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HastaRegisterPage]
})
export class HastaRegisterPageModule {}
