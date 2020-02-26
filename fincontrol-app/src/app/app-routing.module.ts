import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartaoComponent } from './cartao/cartao.component';
import { GastoComponent } from './gasto/gasto.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cartao',
    component: CartaoComponent
  },
  {
    path: 'gasto',
    component: GastoComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
