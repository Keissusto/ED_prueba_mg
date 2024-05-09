import { DataDS } from './../../common/data-ds';
import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
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
  private data: DataDS = inject(DataService);
  constructor(){

  }
  private cargaArma(){
   this.
  }
}
