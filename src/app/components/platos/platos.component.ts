import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AniadirComponent } from "./aniadir/aniadir.component";
import { NgFor, NgIf } from '@angular/common';
import { DatosService } from '../../datos.service';
import { Comidas } from '../../interfaces/comidas';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [RouterLink, AniadirComponent, AniadirComponent, NgIf, NgFor],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  comidas: Comidas[] = [];
  
  constructor(public datosService: DatosService) {
    this.comidas = this.datosService.getAllComidas();
    console.log(this.comidas);
    console.log(this.comidas[1]);
    console.log(this.comidas[2]);
    
  }

}
