import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmoxarifadoHome } from './pages/almoxarifado-home/almoxarifado-home';

const routes: Routes = [{path: '', component: AlmoxarifadoHome }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmoxarifadoRoutingModule { }
