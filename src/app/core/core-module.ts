import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';



@NgModule({
  declarations: [
    Sidebar,
    Header
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Sidebar,
    Header
  ]
})
export class CoreModule { }
