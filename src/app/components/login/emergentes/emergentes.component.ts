import { Component } from '@angular/core';
import { DatosService } from '../../../datos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-emergentes',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './emergentes.component.html',
  styleUrl: './emergentes.component.css',
})
export class EmergentesComponent {
  constructor(public datosService: DatosService) {
    this.obtenerClavesLocalStorage();
  }

  clavesLocalStorage: string[] = [];

  /*   nombre: FormGroup = new FormGroup({'nombre': new FormControl('')}); */
  /* nombre: string = ''; */

  guardarDatos() {
    /* 
this.datosService.usuarioActual = this.datosService.usuarioActual.value.name; */
    const nombre: string = this.datosService.usuarioActual.value.name;

    if (this.datosService.usuarioActual.value.name != '') {
      const datos = { name: nombre, meals: this.datosService.comidas };
      // Convertir el objeto a una cadena JSON antes de guardar
      localStorage.setItem(
        this.datosService.usuarioActual.value.name,
        JSON.stringify(datos)
      );
      alert('Datos guardados correctamente');
      this.datosService.tipoDeSesion = 'local';
      this.datosService.emergenteMostrado = 'nada';
      this.datosService.subEmergenteMostrado = 'nada';
      this.datosService.datosGuardaros = true;

      localStorage.setItem(
        'predeterminado', this.datosService.usuarioActual.value.name
      );
    } else {
      alert('Por favor, ingresa nombre de usuario');
    }

  }
  cargarDatos(usuario: string) {
    const datos = localStorage.getItem(usuario);

    // Ignorar todas las comidas antes de cargar para evitar problemas. Aun así este for creo que ya se puede borrar.
    for (var i = 0; i < this.datosService.comidas.length; i++) {
      this.datosService.comidas[i].ignorar = true;
    }

    if (datos) {
      // Convertir la cadena JSON a un objeto después de cargar
      const datosParseados = JSON.parse(datos);
      this.datosService.usuarioActual.value.name = datosParseados.name;
      this.datosService.comidas = datosParseados.meals;
      this.datosService.tipoDeSesion = 'local';
      this.datosService.emergenteMostrado = 'nada';
      this.datosService.subEmergenteMostrado = 'nada';
      alert('Datos cargados correctamente');
    } else {
      alert('No hay datos guardados');
    }
  }

  borrarDatos(usuario: string) {
   const confirmacion = confirm('¿Estás seguro de que deseas eliminar los datos?');

    if (confirmacion) {
      localStorage.removeItem(usuario);
      alert('Datos eliminados correctamente');
      this.datosService.subEmergenteMostrado = 'nada';
    }
  }

  cerrarSesion() {
    this.datosService.usuarioActual.value.name = '';
    this.datosService.tipoDeSesion = 'nada';
    this.datosService.subEmergenteMostrado = 'nada';  
  }

  obtenerClavesLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      if (clave !== null) {
        // Verifica si la clave no es nula
        this.clavesLocalStorage.push(clave);
      }
    }
  }
}
