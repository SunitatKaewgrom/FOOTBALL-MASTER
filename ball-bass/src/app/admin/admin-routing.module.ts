import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminComponent } from './admin.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { BallMasterComponent } from './ball-master/ball-master.component';
import { LeagueComponent } from './league/league.component';
import { HeadMessageComponent } from './head-message/head-message.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'league',
        component: LeagueComponent
      },
      {
        path: 'table1',
        component: Table1Component
      },
      {
        path: 'table2',
        component: Table2Component
      },
      {
        path: 'table3',
        component: Table3Component
      },
      {
        path: 'master',
        component: BallMasterComponent
      },
      {
        path: 'message',
        component: HeadMessageComponent
      },
      {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
