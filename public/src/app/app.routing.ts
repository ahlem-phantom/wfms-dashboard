import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersComponent } from './components/users/users.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuardService  as AuthGuard } from './core/services/auth-guard/auth-guard.service';
import { AuthService as LoginGuard } from './core/services/auth/auth.service';
import { AuthEntityComponent } from './layouts/auth-entity/auth-entity.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    canActivate :[LoginGuard]

  },
  {
    path: 'entity',
    component: AuthEntityComponent,
    canActivate :[LoginGuard]

  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate :[AuthGuard],
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
