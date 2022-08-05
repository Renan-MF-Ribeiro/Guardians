declare const Buffer: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private loginService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  logar(usuario: string, senha: string) {
    this.loginService
      .validarUsuario(usuario.toLocaleLowerCase().trim(), senha.trim())
      .subscribe(
        (sucess) => {
          sessionStorage.setItem('token', btoa(JSON.stringify(sucess)));
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          alert(err);
        }
      );
  }
}
