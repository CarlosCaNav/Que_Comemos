import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Comidas } from './interfaces/comidas';
import { FormGroup } from '@angular/forms';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  platos: Comidas[] = [];
  tipos: string[] = [];
  /* resultado = signal<string[]>([]); */
  resultado: string = "";
  resultados: string[] = [];

  emergenteMostrado: string = "nada";

  formTipos = signal<FormGroup>(
    new FormGroup({

    })
  )

  public comidas: Comidas[] = [
    { id: 1, nombre: 'Hamburguesas', tipo: 'carnes', ignorar: false },
    { id: 2, nombre: 'Arroz con pollo', tipo: 'arroz' , ignorar: false },
    { id: 3, nombre: 'Ensalada', tipo: 'verduras' , ignorar: false },
    { id: 4, nombre: 'Arroz blanco', tipo: 'arroz' , ignorar: false },
    { id: 5, nombre: 'Chuletas de Aguja', tipo: 'carnes' , ignorar: false },
    { id: 6, nombre: 'Albóndigas', tipo: 'carnes' , ignorar: false },
    { id: 7, nombre: 'Arroz tres delicias', tipo: 'arroz' , ignorar: false },
    { id: 8, nombre: 'Macarrones', tipo: 'pasta' , ignorar: false },
    { id: 9, nombre: 'Sopa', tipo: 'pasta' , ignorar: false },
    { id: 10, nombre: 'solomillo', tipo: 'carnes' , ignorar: false },
  ];


  constructor(private http: HttpClient) {
    this.platos = this.getAllComidas();
    this.TiposdeComida()
    console.log("son " + this.tipos);
    
  }


  getAllComidas(): Comidas[] {
    return this.comidas;
  }

  TiposdeComida() {
    for (var i = 0; i <= this.comidas.length - 1; ++i) {

      if (this.tipos.includes(this.comidas[i].tipo) == false) {
        this.tipos.push(this.comidas[i].tipo)
        /* 
        this.tipos.push(this.comidas[i].tipo) */
      }
    }
  }

  Emergente(emergente: string) {
    this.emergenteMostrado = emergente

    console.log(this.tipos);
    
  }

}