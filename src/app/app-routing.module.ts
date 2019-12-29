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
    loadChildren: './module-160202076/randevu.module#RandevuModule'
  },
  { path: 'prescribe',
    loadChildren: './module-160202053/prescribe/prescribe.module#PrescribePageModule'
  },
  { path: 'patient-medicine', loadChildren: './module-160202053/patient-medicine/patient-medicine.module#PatientMedicinePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
