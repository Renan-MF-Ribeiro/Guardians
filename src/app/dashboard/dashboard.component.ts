import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCatalagoComponent } from './dialog-catalago/dialog-catalago.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

  abrirCatalogo() {
    this.dialog.open(DialogCatalagoComponent);
  }

  ngOnInit(): void {}
}
