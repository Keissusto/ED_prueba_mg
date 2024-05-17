import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { DataDS } from '../../common/data-ds';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../layouts/error/error.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NavbarComponent,ErrorComponent],
  templateUrl: './detalles-api.component.html',
  styleUrls: ['../api/api.component.css']
})
  export class DetallesAPIComponent  {
    armas!: DataDS;
    id!: number;
  
    constructor(private activatedRoute: ActivatedRoute, private dataService: DataServiceService, private Router: Router) 
    {
 this.id= this.activatedRoute.snapshot.params["id"];
  this.cargarArma();
   }
  
    private cargarArma(): void {
      this.dataService.loadApi().subscribe({
        next: (datos: DataDS) => {
          this.armas = datos;
        },
        error: (err: string) => {
          console.log(err);
        },
        complete: () => {
          console.log("complete");
        }
      });
    }

  }