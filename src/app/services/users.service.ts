import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../mock-db/users';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  validarUsuario(user: string, senha: string): Observable<User> {
    return new Observable((observador) => {
      let userDB: any = users.find((a) => a.username == user);
      if (userDB) {
        if (userDB?.senha == senha) {
          let userReturn = JSON.parse(JSON.stringify(userDB));
          delete userReturn.senha;
          observador.next(userReturn);
        } else {
          observador.error('Usuário ou senha Inválidos');
        }
      } else {
        observador.error('Usuário não localizado');
      }
    });
  }

  cadastrar(user: User): Observable<User[]> {
    return new Observable((observador) => {
      if (users.find((a) => a.email == user.email)) {
        observador.error('Email já cadastrado.');
        observador.complete();
      } else {
        if (users.find((a) => a.username == user.username)) {
          observador.error('Usuario já cadastrado.');
          observador.complete();
        } else {
          try {
            users.push(user);
            observador.next(users);
          } catch {
            observador.error('Erro inesperado tente novamente.');
          }
        }
      }
    });
  }
}
