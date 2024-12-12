import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comidas } from './interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  emergenteMostrado: string = "nada";

  private comidas: Comidas[] = [
    {id: 1, nombre: 'Hamburguesas', tipo: 'carne'},
    {id: 2, nombre: 'Arroz con pollo', tipo: 'arroz'},
    {id: 3, nombre: 'Ensalada', tipo: 'verduras'},
    {id: 4, nombre: 'Arroz blanco', tipo: 'arroz'}
  ]

getAllComidas(): Comidas[]{
  return this.comidas;  
}

  Emergente(emergente : string){
this.emergenteMostrado = emergente
  }
}
