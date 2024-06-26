import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ErrorComponent } from './layouts/error/error.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, NavbarComponent, HeaderComponent,ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFinalGitLM';
}
