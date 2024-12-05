import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { adminGuard } from './admin.guard';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tb1',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'tb1',
    component: Table1Component
  },
  {
    path: 'tb2',
    component: Table2Component
  },
  {
    path: 'tb3',
    component: Table3Component
  },


  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
