import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimonioHome } from './pages/patrimonio-home/patrimonio-home';

const routes: Routes = [
  { path: '', component: PatrimonioHome}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonioRoutingModule { }
