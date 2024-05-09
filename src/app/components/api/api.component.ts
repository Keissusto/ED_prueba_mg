import { DataDS } from './../../common/data-ds';
import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

  api!: DataDS;
  private data: DataDS = inject(DataServiceService);
  constructor(){

  }
  private cargaArma(){
   this.data.name.
  }
}
