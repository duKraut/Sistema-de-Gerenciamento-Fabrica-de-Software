import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard-module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/dashboard/dashboard-module').then(m =>DashboardModule)},
  { path: 'almoxarifado', loadChildren: () => import('./features/almoxarifado/almoxarifado-module').then(m => m.AlmoxarifadoModule)},
  { path: 'patrimonio', loadChildren: () => import('./features/patrimonio/patrimonio-module').then(m => m.PatrimonioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
