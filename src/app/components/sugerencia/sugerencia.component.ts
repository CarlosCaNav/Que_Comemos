import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatosService } from '../../datos.service';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [RouterLink, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css',
})
export class SugerenciaComponent {
  constructor(public datosService: DatosService) {
    for (var i = 0; i < this.datosService.tipos.length; i++) {
      var eleccion = this.datosService.tipos[i];

      this.elegir.addControl(eleccion, new FormControl(false));
    }
  }

  elegir: FormGroup = new FormGroup({});

  ResultadoAleatorio() {
    var numeroAleatorio = Math.floor(
      Math.random() * this.datosService.comidas.length
    );
    const resultado: string = this.datosService.comidas[numeroAleatorio].nombre;

    console.log("valor " + this.elegir.value[resultado]);
    console.log("holi " + resultado);
    

    if (this.elegir.value.resultado == true) {
      console.log(this.elegir.value.resultado);
      
      console.log("la lio?");
      
      this.ResultadoAleatorio();
    }
    else { this.datosService.resultado.push(resultado); /* 
      console.log("Ignora los valores?");
      console.log(this.elegir.value.resultado);
      console.log(this.elegir.value.arroz);
      console.log(numeroAleatorio);
      console.log(resultado); */
      
      
    }
  }
}
