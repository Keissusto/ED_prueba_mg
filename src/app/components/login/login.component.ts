import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  async login() {
   
    if (this.username === 'usuario' && this.password === 'senha') {
      alert('Login bem sucedido!');
     
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  }
}
