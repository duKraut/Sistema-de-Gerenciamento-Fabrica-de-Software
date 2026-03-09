import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Sidebar,
    Header
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Sidebar,
    Header
  ]
})
export class CoreModule { }
