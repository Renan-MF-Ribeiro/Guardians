import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Filtros } from 'src/app/models/filtros.model';

@Injectable({
  providedIn: 'root',
})
export class FiltroService {
  filtroVazio!: Filtros;
  private filtros: Subject<Filtros> = new BehaviorSubject<Filtros>(
    this.filtroVazio
  );

  get filtros$() {
    return this.filtros.asObservable();
  }

  addFiltro(data: Filtros) {
    this.filtros.next(data);
  }
}
