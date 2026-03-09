import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmoxarifadoRoutingModule } from './almoxarifado-routing-module';
import { AlmoxarifadoHome } from './pages/almoxarifado-home/almoxarifado-home';


@NgModule({
  declarations: [
    AlmoxarifadoHome
  ],
  imports: [
    CommonModule,
    AlmoxarifadoRoutingModule
  ]
})
export class AlmoxarifadoModule { }
