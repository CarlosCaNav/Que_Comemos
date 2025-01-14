import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DatosService } from '../../datos.service';
import { EmergentesComponent } from './emergentes/emergentes.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, EmergentesComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public datosService: DatosService) {}

  borrar(pepito: string){
    this.datosService.usuarioActual.value.name = pepito;
  }
}
