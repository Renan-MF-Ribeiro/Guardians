import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Filtros } from 'src/app/models/filtros.model';
import { CarrosService } from 'src/app/services/carros.service';
import { FiltroService } from '../util/filter.service';

@Component({
  selector: 'app-filtro-dialog',
  templateUrl: './filtro-dialog.component.html',
  styleUrls: ['./filtro-dialog.component.css'],
})
export class FiltroDialogComponent implements OnInit {
  tipos: string[] = [];
  motores: string[] = [];
  tiposFiltros: string[] = [];
  motoresFiltos: string[] = [];
  lugaresFiltro: string[] = [];
  constructor(
    private filtroService: FiltroService,
    private carroService: CarrosService
  ) {
    carroService.getPropriedades().subscribe((propriedades: any) => {
      this.tipos = propriedades.tipos;
      this.motores = propriedades.motores;
    });
    filtroService.filtros$.subscribe((filtros) => {
      this.tiposFiltros = filtros?.tipos ?? [];
      this.motoresFiltos = filtros?.motores ?? [];
      this.lugaresFiltro = filtros?.lugares ?? [];
    });
  }

  filtroChange(filtro: string, filtros: string[], e?: any) {
    switch (filtros) {
      case this.tiposFiltros: {
        if (e.checked) {
          this.tiposFiltros.push(filtro);
        } else {
          const index = this.tiposFiltros.indexOf(filtro, 0);
          if (index > -1) {
            this.tiposFiltros.splice(index, 1);
          }
        }
        break;
      }
      case this.motoresFiltos: {
        const index = this.motoresFiltos.indexOf(filtro, 0);
        if (index > -1) {
          this.motoresFiltos.splice(index, 1);
        } else {
          this.motoresFiltos.push(filtro);
        }

        break;
      }
      case this.lugaresFiltro: {
        const index = this.lugaresFiltro.indexOf(filtro, 0);
        if (index > -1) {
          this.lugaresFiltro.splice(index, 1);
        } else {
          this.lugaresFiltro.push(filtro);
        }
        break;
      }
    }
  }

  filtrar(filtro: Filtros) {
    this.filtroService.addFiltro(filtro);
  }

  ngOnInit(): void {
    let a = 'ss';
    a.slice(a.indexOf(': '));
  }
}
