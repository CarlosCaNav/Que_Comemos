import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosService } from './datos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public datosService: DatosService) {
    // Carga el último usuario que guardó datos
    const ultimoUsuario = localStorage.getItem('predeterminado');


    if (ultimoUsuario) {
      const datos = localStorage.getItem(ultimoUsuario);

      if (datos) {
        // Convertir la cadena JSON a un objeto después de cargar
        const datosParseados = JSON.parse(datos);
        this.datosService.usuarioActual.value.name = datosParseados.name;
        this.datosService.comidas = datosParseados.meals;
        this.datosService.tipoDeSesion = 'local';
        this.datosService.emergenteMostrado = 'nada';
        this.datosService.subEmergenteMostrado = 'nada';
      }
      else { alert ('error desconocido, contacta con el administrador'); }
    }
  }
  title = 'Que_comemos';
}
