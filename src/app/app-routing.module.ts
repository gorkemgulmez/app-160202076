import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'portal',
    loadChildren: './portal/portal.module#PortalModule'
  },
  {
    path: 'player',
    loadChildren: './player/player.module#PlayerModule'
  },
  {
    path: 'appointment',
    loadChildren: './randevu/randevu.module#RandevuModule'
  },
  {
    path: 'prescribe',
    loadChildren: './prescribe/prescribe/prescribe.module#PrescribePageModule'
  },
  {
    path: 'patient-medicine',
    loadChildren: './prescribe/patient-medicine/patient-medicine.module#PatientMedicinePageModule'
  },
  {
    path: 'add-analysis',
    loadChildren: './analysis/add-analysis/add-analysis.module#AddAnalysisPageModule'
  },
  {
    path: 'patient-analysis',
    loadChildren: './analysis/patient-analysis/patient-analysis.module#PatientAnalysisPageModule'
  },
  {
    path: 'ameliyat',
    loadChildren: './ameliyat/ameliyat/ameliyat.module#AmeliyatPageModule'
  },
  {
    path: 'ameliyat/add',
    loadChildren: './ameliyat/add/add.module#AddPageModule'
  },
  
  //Login-Register modülleri ayrı ayrı yazılmıştır
  {
    path:'login-doctor',
    loadChildren: './doktor-login/doktor-login.module#DoktorLoginPageModule'
  },
  {
    path:'register-doctor',
    loadChildren: './doktor-register/doktor-register.module#DoktorRegisterPageModule'
  },
  {
    path:'login-hasta',
    loadChildren: './hasta-login/hasta-login.module#HastaLoginPageModule'
  },
  {
    path:'register-hasta',
    loadChildren: './hasta-register/hasta-register.module#HastaRegisterPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
