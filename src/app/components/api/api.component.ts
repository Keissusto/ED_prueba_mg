import { DataDS, Weapons } from './../../common/data-ds';
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

  armas: Weapons[] = [];

  private data: DataServiceService =  inject(DataServiceService);
  DataDS: any;
  constructor()
  {
  this.cargarApi();
  }
  private cargarApi(){
    this.data.loadApi().subscribe({
      next:( datos: DataDS[]) => {
        this.DataDS = datos;
      },
      error:(err: string) =>{
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    });
  }
  cambiarPag(pag:string){
    switch(pag){
      case "first":
        this.loadPag("https://rickandmortyapi.com/api/character/?page=1");
        break;
        case "prev":
          this.loadPag(this.DataDS.info.prev)
          break;
          case "next":
            this.loadPag(this.DataDS.info.next)
          break;
          case "last":
            this.loadPag("https://rickandmortyapi.com/api/character/?page=" + 42)
            break;
            default:
              break;

    }
  }
  private loadPag(pag: string){
    this.data.reloadPag(pag).subscribe({
      next: (datos: DataDS) => {
        this.DataDS = datos
      },
      error:(err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }
}
