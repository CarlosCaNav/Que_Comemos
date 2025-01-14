import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Comidas } from './interfaces/comidas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  usuarioActual: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  tipoDeSesion: string = 'nada';
  platos: Comidas[] = [];
  tipos: string[] = [];
  resultado: string = '';
  resultados: string[] = [];

  emergenteMostrado: string = 'nada';
  subEmergenteMostrado: string = 'nada';

  formTipos = signal<FormGroup>(new FormGroup({}));

  public comidas: Comidas[] = [
    { id: 1, nombre: 'Hamburguesas', tipo: 'carnes', ignorar: true },
    { id: 2, nombre: 'Arroz con pollo', tipo: 'arroz', ignorar: true },
    { id: 3, nombre: 'Ensalada', tipo: 'verduras', ignorar: true },
    { id: 4, nombre: 'Arroz blanco', tipo: 'arroz', ignorar: true },
    { id: 5, nombre: 'Chuletas de Aguja', tipo: 'carnes', ignorar: true },
    { id: 6, nombre: 'Albóndigas', tipo: 'carnes', ignorar: true },
    { id: 7, nombre: 'Arroz tres delicias', tipo: 'arroz', ignorar: true },
    { id: 8, nombre: 'Macarrones', tipo: 'pasta', ignorar: true },
    { id: 9, nombre: 'Sopa', tipo: 'pasta', ignorar: true },
    { id: 10, nombre: 'solomillo', tipo: 'carnes', ignorar: true },
  ];

  constructor(private http: HttpClient) {
    this.platos = this.getAllComidas();
    this.tiposdeComida();
    console.log('son ' + this.tipos);
  }

  getAllComidas(): Comidas[] {
    return this.comidas;
  }

  tiposdeComida() {
    for (var i = 0; i <= this.comidas.length - 1; ++i) {
      if (this.tipos.includes(this.comidas[i].tipo) == false) {
        this.tipos.push(this.comidas[i].tipo);
        /* 
        this.tipos.push(this.comidas[i].tipo) */
      }
    }
  }

  emergente(onSelectEmergente: string) {
    this.emergenteMostrado = onSelectEmergente;
    this.subEmergente('');
  }

  subEmergente(onSelectSubEmergente: string) {
    this.subEmergenteMostrado = onSelectSubEmergente;
  }
}
