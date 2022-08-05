import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Filtros } from 'src/app/models/filtros.model';
import { CarrosService } from 'src/app/services/carros.service';

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
    private carroService: CarrosService,
    public dialogRef: MatDialogRef<FiltroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filtros
  ) {
    carroService.getPropriedades().subscribe((propriedades: any) => {
      this.tipos = propriedades.tipos;
      this.motores = propriedades.motores;
    });
    if (data) {
      this.tiposFiltros = this.data.tipos ?? [];
      this.motoresFiltos = this.data.motores ?? [];
      this.lugaresFiltro = this.data.lugares ?? [];
    }
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

  ngOnInit(): void {}
}
