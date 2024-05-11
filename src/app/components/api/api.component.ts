import { DataDS } from './../../common/data-ds';
import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../services/data.service.service';
import { Data } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {
}
