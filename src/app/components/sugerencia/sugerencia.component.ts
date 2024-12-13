import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatosService } from '../../datos.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [RouterLink, NgFor, FormsModule,],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css'
})
export class SugerenciaComponent {
  constructor(public datosService: DatosService){}
}
