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
    this.platosSeleccionados() 
  }

  platosNoDescartados: number[] = [];
  elegir: FormGroup = new FormGroup({});

  /* 
  ngOnInit(): void {
    this.elegir.valueChanges.subscribe((ev) => {
      console.log('test-evento', ev);
    });
  } */

    platosSeleccionados() {
      for (var i = 0; i < this.datosService.tipos.length; i++) {
        var eleccion = this.datosService.tipos[i];
  
        this.elegir.addControl(eleccion, new FormControl(true));
      }
    }

  PlatosPosibles() {
    this.platosNoDescartados = [];

    for (var i = 0; i < this.datosService.comidas.length; i++) {
      for (var j = 0; j < this.datosService.tipos.length; j++) {
        var eleccion = this.datosService.tipos[j];

        if (this.elegir.value[eleccion] == true) {
          if (this.datosService.comidas[i].tipo == eleccion) {
            this.platosNoDescartados.push(i);
          }
        }
      }
    }
  }

  ResultadoAleatorio() {
    this.platosSeleccionados();
    this.PlatosPosibles();
    if (this.platosNoDescartados.length == 0) {
      alert('No hay platos que cumplan con los requisitos seleccionados');
    } else {
      var numeroAleatorioFinal = 0;
      var numeroAleatorio = Math.floor(
        Math.random() * this.platosNoDescartados.length
      );

      numeroAleatorioFinal = this.platosNoDescartados[numeroAleatorio];

      if (this.datosService.resultados.length > 2) {
        this.datosService.resultados.shift();
      }

      this.datosService.resultados.push(
        this.datosService.comidas[numeroAleatorioFinal].nombre
      );
      this.datosService.resultado =
        this.datosService.comidas[numeroAleatorioFinal].nombre;

        this.datosService.resultados=[...this.datosService.resultados];
    }
  }
}
