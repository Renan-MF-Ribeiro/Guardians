import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Carro } from 'src/app/models/carro.model';
import { Filtros } from 'src/app/models/filtros.model';
import { User } from 'src/app/models/user.model';
import { CarrosService } from 'src/app/services/carros.service';
import { FiltroService } from '../util/filter.service';
import { getBase64 } from '../util/toBase64';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario!: User;

  filtrado: Carro[] = [];
  carros: Carro[] = [];
  filtros!: Filtros;
  constructor(
    private carrosService: CarrosService,
    private filtroService: FiltroService
  ) {
    this.usuario = JSON.parse(atob(sessionStorage.getItem('token')!)) as User;
  }

  ngOnInit(): void {
    this.carrosService.getCarros().subscribe(
      (carrosDB) => {
        this.carros = carrosDB;
      },
      (erro) => console.log(erro)
    );
    this.filtroService.filtros$.subscribe((result) => {
      if (result) {
        this.filtros = result;
        result.tipos.forEach((tipo: string) => {
          this.filtrado = this.filtrado.concat(
            this.carros.filter((carro) => carro.type == tipo)
          );
        });
        result.motores.forEach((motor: string) => {
          this.filtrado = this.filtrado.concat(
            this.carros.filter(
              (carro) => carro.engine == motor.slice(motor.indexOf(':') + 2)
            )
          );
        });
        result.lugares.forEach((lugares: string) => {
          this.filtrado = this.filtrado.concat(
            this.carros.filter((carro) => carro.size == lugares)
          );
        });
      }
    });
  }

  buscar(termo: string) {
    let data = new MatTableDataSource(this.carros);
    data.filter = termo;
    this.filtrado = data.filteredData;
  }

  fotoPerfil(event: any) {
    const file: File = event.target.files[0];
    getBase64(file).subscribe((img) => {
      this.usuario.imgPerfil = img;
    });
  }
}
