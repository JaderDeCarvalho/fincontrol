import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GastoComponent } from './gasto/gasto.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      LoginComponent,
      RegistrationComponent,
      MenuComponent,
      MenuComponent,
      DashboardComponent,
      GastoComponent,
      CartaoComponent,
      CategoriaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
