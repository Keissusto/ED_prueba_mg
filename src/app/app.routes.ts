import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { APIComponent } from './components/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DetallesAPIComponent } from './components/detalles-api/detalles-api.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './layouts/error/error.component';


export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'inicio',component: InicioComponent},
    {path:'API',component: APIComponent},
    {path:'header',component: HeaderComponent},
    {path:'navbar',component: NavbarComponent},
    {path:'API/:id',component: DetallesAPIComponent},
    {path:'registro',component: RegistroComponent},
    {path:'**',component: ErrorComponent}
    
];
