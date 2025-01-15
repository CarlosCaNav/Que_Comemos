import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosService } from './datos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public datosService: DatosService) {}
  title = 'Que_comemos';
}
