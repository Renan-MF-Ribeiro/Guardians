import { Component, Input, OnInit } from '@angular/core';
import { carros } from 'src/app/mock-db/carros';
import { Carro } from 'src/app/models/carro.model';

@Component({
  selector: 'app-card-carro',
  templateUrl: './card-carro.component.html',
  styleUrls: ['./card-carro.component.css'],
})
export class CardCarroComponent {
  @Input() id!: number;
  @Input() carro: Carro = carros[0];
  constructor() {
    let i = setInterval(() => {
      if (this.id) {
        clearInterval(i);
        this.carro = carros.find((a) => a.id == this.id) ?? carros[0];
      }
    });
  }
}
