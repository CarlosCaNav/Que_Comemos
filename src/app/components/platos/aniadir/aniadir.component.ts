import { Component } from '@angular/core';
import { DatosService } from '../../../datos.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Comidas } from '../../../interfaces/comidas';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './aniadir.component.html',
  styleUrl: './aniadir.component.css',
})
export class AniadirComponent {
  constructor(public datosService: DatosService) {}

  aniadir: FormGroup = new FormGroup({
    nombre: new FormControl(undefined, Validators.required), 
    eleccion: new FormControl(""), 
    arroz: new FormControl(false),
    pasta: new FormControl(false),
    verduras: new FormControl(false),
    carnes: new FormControl(false),
    carnes_picadas: new FormControl(false),
    pescados: new FormControl(false),
  });
/* 
  ngOnInit(): void {
    this.aniadir.valueChanges.subscribe(ev => {
      console.log('test-evento', ev);
    })
  } */
  agregar() {
    var nuevaComida: Comidas = { id: 1, nombre: 'Hamburguesas', tipo: 'carne', ignorar: false };


    if (this.aniadir.valid) {
/* 
for( i = 0; i < this.aniadir.length ){} */

      nuevaComida = {
        id: this.datosService.comidas.length + 1,
        nombre: this.aniadir.value.nombre,
        tipo: this.aniadir.value.eleccion,
        ignorar: false,
      };

      this.datosService.comidas.push(nuevaComida);

      this.datosService.emergenteMostrado = 'nada';
      console.log("Qué hay dentro" + this.datosService.comidas[this.datosService.comidas.length -1].nombre);
      
    }
    else {alert("Tú! subnormal, que no le has puesto nombre!")}

    console.log('lo que me pone es: ' + this.aniadir.value.eleccion);

    console.log('hay ' + this.datosService.comidas.length + ' comidas');
  }
}
