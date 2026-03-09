import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrimonioRoutingModule } from './patrimonio-routing-module';
import { PatrimonioHome } from './pages/patrimonio-home/patrimonio-home';


@NgModule({
  declarations: [
    PatrimonioHome
  ],
  imports: [
    CommonModule,
    PatrimonioRoutingModule
  ]
})
export class PatrimonioModule { }
