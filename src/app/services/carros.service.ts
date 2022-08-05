import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carros } from '../mock-db/carros';
import { propriedades } from '../mock-db/lista.propriedades';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  constructor() {}
  getCarros(): Observable<Carro[]> {
    return new Observable((observador) => {
      try {
        const carrosDB = carros;
        observador.next(carrosDB);
      } catch (erro) {
        observador.error(erro);
      }
    });
  }

  getPropriedades(): Observable<any> {
    return new Observable((observador) => {
      try {
        const propriedadesFiltro = propriedades;
        observador.next(propriedadesFiltro);
      } catch (erro) {
        observador.error(erro);
      }
    });
  }
}
