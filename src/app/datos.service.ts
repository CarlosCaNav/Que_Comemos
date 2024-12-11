import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  emergenteMostrado: string = "nada";

  Emergente(emergente : string){
this.emergenteMostrado = emergente
  }
}
