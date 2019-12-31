import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'randevu',
    loadChildren: './randevu/randevu/randevu.module#RandevuPageModule'
  },
  {
    path: 'randevu/add',
    loadChildren: './randevu/add/add.module#AddPageModule'
  },
  {
    path: 'randevu/update/:id',
    loadChildren: './randevu/update/update.module#UpdatePageModule'
  },
  {
    path: 'prescribe',
    loadChildren: './prescribe/prescribe/prescribe.module#PrescribePageModule'
  },
  {
    path: 'patient-analysis',
    loadChildren: './analysis/patient-analysis/patient-analysis.module#PatientAnalysisPageModule'
  },
  {
    path: 'ameliyat',
    loadChildren: './ameliyat/ameliyat/ameliyat.module#AmeliyatPageModule'
  },
 { path: 'ameliyat/add',
    loadChildren: './ameliyat/add/add.module#AddPageModule'}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
