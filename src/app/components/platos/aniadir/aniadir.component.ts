import { Component } from '@angular/core';
import { DatosService } from '../../../datos.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Comidas } from '../../../interfaces/comidas';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './aniadir.component.html',
  styleUrl: './aniadir.component.css',
})
export class AniadirComponent {
  constructor(public datosService: DatosService) {}

  tipos: FormGroup = new FormGroup({
    tipo: new FormControl(undefined, Validators.required),
  });

  aniadir: FormGroup = new FormGroup({
    nombre: new FormControl(undefined, Validators.required),
    eleccion: new FormControl(''),
    arroz: new FormControl(false),
    pasta: new FormControl(false),
    verduras: new FormControl(false),
    carnes: new FormControl(false),
    carnes_picadas: new FormControl(false),
    pescados: new FormControl(false),
  });
  agregar() {
    var nuevaComida: Comidas = {
      id: 1,
      nombre: 'Hamburguesas',
      tipo: 'carne',
      ignorar: false,
    };

    if (this.tipos.valid) {
      this.datosService.tipos.push(this.tipos.value.tipo);
      console.log('tipos: ' + this.datosService.tipos);

/* aquí estoy repitiendo el mismo código de abajo con un pequeño cambio. Tengo que solucionarlo */
      if (this.tipos.valid) {
        nuevaComida = {
          id: this.datosService.comidas.length + 1,
          nombre: this.aniadir.value.nombre,
          tipo: this.tipos.value.tipo, // aquí es donde hago hacer el cambio
          ignorar: false,
        };

        this.datosService.comidas.push(nuevaComida);

        this.datosService.emergenteMostrado = 'nada';
        this.datosService.datosGuardaros = false;
      } else {
        alert('Por favor, ingresa nombre de usuario');
      }

    } else {
      if (this.aniadir.valid) {
        nuevaComida = {
          id: this.datosService.comidas.length + 1,
          nombre: this.aniadir.value.nombre,
          tipo: this.aniadir.value.eleccion,
          ignorar: false,
        };

        this.datosService.comidas.push(nuevaComida);

        this.datosService.emergenteMostrado = 'nada';
        this.datosService.datosGuardaros = false;
        console.log(
          'Qué hay dentro ' +
            this.datosService.comidas[this.datosService.comidas.length - 1]
              .nombre
        );
      } else {
        alert('Por favor, ingresa nombre de usuario');
      }
    }
  }
}
