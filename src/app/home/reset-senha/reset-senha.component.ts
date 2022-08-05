import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css'],
})
export class ResetSenhaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  reset(email: string) {
    alert('Enviado email para reset de senha');
    this.router.navigateByUrl('');
  }
}
