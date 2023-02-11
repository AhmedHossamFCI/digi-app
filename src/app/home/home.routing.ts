import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../shared/utils';
import { HomePage } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'products',
        loadChildren: () => import('../features/products/products.module').then(m => m.ProductsModule),
        canLoad: [GuardService]
      }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
