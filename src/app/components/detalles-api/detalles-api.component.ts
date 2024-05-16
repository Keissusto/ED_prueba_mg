import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { DataDS } from '../../common/data-ds';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './detalles-api.component.html',
  styleUrls: ['../api/api.component.css']
})
  export class DetallesAPIComponent  {
    arma!: DataDS;
  
    constructor(private activatedRoute: ActivatedRoute, private dataService: DataServiceService) 
    {  const id = this.activatedRoute.snapshot.params["id"];
    this.cargarArma(id);}
  
    private cargarArma(id: string): void {
      this.dataService.loadWeapon(id).subscribe({
        next: (datos: DataDS) => {
          this.arma = datos;
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