import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDS } from '../common/data-ds';
import { DetallesAPIComponent } from '../components/detalles-api/detalles-api.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http: HttpClient){

  }

  loadApi(): Observable<DataDS[]>
  {
    return this.http.get<DataDS[]>("../../assets/datos/ds.json")
  }
  loadWeapon(id: string): Observable <DataDS>{
    return this.http.get<DataDS>("../../assets/datos/ds.json");
  }
  reloadPag(pag: string): Observable<DataDS[]>
  {
    return this.http.get<DataDS[]>(pag)
  }

}
