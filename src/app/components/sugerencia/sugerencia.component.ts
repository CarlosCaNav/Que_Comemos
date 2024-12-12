import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css'
})
export class SugerenciaComponent {

}
