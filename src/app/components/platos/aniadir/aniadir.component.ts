import { Component } from '@angular/core';
import { DatosService } from '../../../datos.service';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  imports: [],
  templateUrl: './aniadir.component.html',
  styleUrl: './aniadir.component.css'
})
export class AniadirComponent {
  constructor (public datosService:DatosService){}

 }
