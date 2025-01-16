import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AniadirComponent } from "./aniadir/aniadir.component";
import { NgFor, NgIf } from '@angular/common';
import { DatosService } from '../../datos.service';/* 
import { Comidas } from '../../interfaces/comidas'; */

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [RouterLink, AniadirComponent, AniadirComponent, NgIf, NgFor],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {constructor(public datosService: DatosService) {}

eliminar(id: number) {
  this.datosService.comidas.splice(id - 1, 1);
  this.datosService.datosGuardaros = false;

  for (var i = 0; i <= this.datosService.comidas.length - 1; ++i) {
    this.datosService.comidas[i].id = i + 1;
  }
}

  /* 
  comidas: Comidas[] = [];
  
  constructor(public datosService: DatosService) {
    this.comidas = this.datosService.getAllComidas();
    console.log(this.comidas);
    console.log(this.comidas[1]);
    console.log(this.comidas[2]);
    
  } */

}
