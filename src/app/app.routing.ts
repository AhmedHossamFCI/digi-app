import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService, LoginGuardService } from './shared';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule),
    canActivateChild: [LoginGuardService]
  },
  {
    path: '',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
    canLoad: [GuardService],
    canActivateChild: [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
