import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AniadirComponent } from "./aniadir/aniadir.component";
import { NgIf } from '@angular/common';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [RouterLink, AniadirComponent, AniadirComponent, NgIf],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {

  constructor( public datosService: DatosService) {}

}
