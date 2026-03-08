import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { StatCard } from './components/stat-card/stat-card';
import { ActionList } from './components/action-list/action-list';
import { DashboardHome } from './pages/dashboard-home/dashboard-home';


@NgModule({
  declarations: [
    StatCard,
    ActionList,
    DashboardHome
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
