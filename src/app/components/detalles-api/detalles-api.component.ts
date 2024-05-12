import { DataDS, Weapons } from './../../common/data-ds';
import { Component, OnInit, inject } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { Data, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: '../api/api.component.html',
  styleUrl: '../api/api.component.css'
})
export class DetallesAPIComponent {

  armas: Weapons[] = [];

  private data: DataServiceService =  inject(DataServiceService);
  private Router: Router = inject(Router);
  DataDS !: any;
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
  cambiarChar(id: number){
    if(id>0 && id<827){
      this.Router.navigateByUrl("/personajes/" + id).then(() => this.cargarApi());
    }

  }
}
