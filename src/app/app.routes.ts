import { Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'inicio',component: InicioComponent},
    {path:'API',component: APIComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'header',component: HeaderComponent},
    {path:'navbar',component: NavbarComponent}
];
