import { Component, OnInit } from '@angular/core';
import { carros } from 'src/app/mock-db/carros';

@Component({
  selector: 'app-dialog-catalago',
  templateUrl: './dialog-catalago.component.html',
  styleUrls: ['./dialog-catalago.component.css'],
})
export class DialogCatalagoComponent implements OnInit {
  carros = carros;
  constructor() {}

  ngOnInit(): void {}
}
