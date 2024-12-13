import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comidas } from './interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  platos: Comidas[] = [];
  tipos: string[] = [];
  resultado: string[] = [];

  emergenteMostrado: string = "nada";

  private comidas: Comidas[] = [
    { id: 1, nombre: 'Hamburguesas', tipo: 'carne' },
    { id: 2, nombre: 'Arroz con pollo', tipo: 'arroz' },
    { id: 3, nombre: 'Ensalada', tipo: 'verduras' },
    { id: 4, nombre: 'Arroz blanco', tipo: 'arroz' },
    { id: 5, nombre: 'Chuletas de Aguja', tipo: 'carne' },
    { id: 6, nombre: 'Albóndigas', tipo: 'carne picada' },
    { id: 7, nombre: 'Arroz tres delicias', tipo: 'arroz' },
    { id: 8, nombre: 'Macarrones', tipo: 'pasta' },
    { id: 9, nombre: 'Sopa', tipo: 'pasta' },
    { id: 10, nombre: 'solomillo', tipo: 'carne' },
  ];


  constructor(private http: HttpClient) {
    this.platos = this.getAllComidas();
    this.TiposdeComida()
  }


  getAllComidas(): Comidas[] {
    return this.comidas;
  }

  TiposdeComida() {
    for (var i = 0; i <= this.comidas.length - 1; ++i) {

      if (this.tipos.includes(this.comidas[i].tipo) == false) {
        this.tipos.push(this.comidas[i].tipo)
      }

    }

  }

  Emergente(emergente: string) {
    this.emergenteMostrado = emergente
  }

  ResultadoAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * this.comidas.length)
    console.log(numeroAleatorio);
    if (this.resultado.length >= 7){
      this.resultado = [];
    }
    if (this.comidas[numeroAleatorio].tipo == "nada") {
      this.ResultadoAleatorio()
    } else {
      this.resultado =[...this.resultado, " " + this.comidas[numeroAleatorio].nombre]     
    }
  }
}
