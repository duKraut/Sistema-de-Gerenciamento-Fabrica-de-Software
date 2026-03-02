import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { StatCard } from './components/stat-card/stat-card';
import { ActionList } from './components/action-list/action-list';


@NgModule({
  declarations: [
    StatCard,
    ActionList
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
