import { DataDS } from './../../common/data-ds';
import { Component, OnInit, inject } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { Data, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

  api: DataDS[] = [];

  private data: DataServiceService =  inject(DataServiceService);
  constructor()
  {
  this.cargarApi();
  }

  private cargarApi(){
    this.data.loadApi().subscribe({
      next:( datos: DataDS[]) => {
        this.api = datos;
      },
      error:(err: string) =>{
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    });
  }

}
