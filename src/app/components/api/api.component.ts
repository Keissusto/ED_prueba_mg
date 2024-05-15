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

  armas: DataDS[] = [];

  private data: DataServiceService =  inject(DataServiceService);
  DataDS: any;
  constructor()
  {
  this.cargarApi();
  }
  private cargarApi(){
    this.data.loadApi().subscribe({
      next:( datos: DataDS[]) => {
        this.armas = datos;
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
      case "axe":
        this.loadPag("../../assets/datos/axe.json");
        break;
        case "bow":
        this.loadPag("../../assets/datos/bow.json");
        break;
        case "crossbow":
        this.loadPag("../../assets/datos/crossbow.json");
        break;
        case "curved-greatsword":
        this.loadPag("../../assets/datos/curved-greatsword.json");
        break;
        case "curved-sword":
        this.loadPag("../../assets/datos/curved-sword.json");
        break;
        case "dagger":
        this.loadPag("../../assets/datos/dagger.json");
        break;
        case "gauntlet":
        this.loadPag("../../assets/datos/gauntlet.json");
        break;
        case "greataxe":
        this.loadPag("../../assets/datos/greataxe.json");
        break;
        case "great-hammer":
        this.loadPag("../../assets/datos/great-hammer.json");
        break;
        case "greatsword":
        this.loadPag("../../assets/datos/greatsword.json");
        break;
        case "halberd":
        this.loadPag("../../assets/datos/halberd.json");
        break;
        case "hammer":
        this.loadPag("../../assets/datos/hammer.json");
        break;
        case "katana":
        this.loadPag("../../assets/datos/katana.json");
        break;
        case "spear":
        this.loadPag("../../assets/datos/spear.json");
        break;
        case "straight-sword":
        this.loadPag("../../assets/datos/straight-sword.json");
        break;
        case "thrusting-sword":
        this.loadPag("../../assets/datos/thrusting-sword.json");
        break;
        case "ultra-greatsword":
        this.loadPag("../../assets/datos/ultra-greatsword.json");
        break;
        case "whip":
        this.loadPag("../../assets/datos/whip.json");
        break;
    }
  }
  private loadPag(pag: string){
    this.data.reloadPag(pag).subscribe({
      next:( datos: DataDS[]) => {
        this.armas = datos;
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
