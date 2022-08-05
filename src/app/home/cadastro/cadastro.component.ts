import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  hide = true;
  hideConfirmacao = true;
  private formBuilder: FormBuilder = new FormBuilder();
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  cadastro: FormGroup = this.formBuilder.group(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      nome: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, minusculoValidacao]),
      senha: new FormControl('', Validators.required),
      senhaConfirmacao: new FormControl('', Validators.required),
    },
    {
      validators: [senhaConfirmacaoIguais],
    }
  );

  cadastrar(user: User) {
    user.imgPerfil = 'assets/person.png';
    this.userService.cadastrar(user).subscribe(
      (sucess) => {
        console.log(sucess);
        alert('Cadastrado com Sucesso');
        this.router.navigateByUrl('');
      },
      (erro) => {
        alert(erro);
      }
    );
  }
}

function senhaConfirmacaoIguais(formGroup: FormGroup) {
  const senha = formGroup.get('senha')?.value ?? '';
  const senhaConfirmacao = formGroup.get('senhaConfirmacao')?.value ?? '';
  if (senha.trim() + senhaConfirmacao.trim()) {
    return senha == senhaConfirmacao ? null : { senhasDiferentes: true };
  } else {
    return null;
  }
}

function minusculoValidacao(control: AbstractControl) {
  const valor = control.value as string;
  if (valor != valor.toLocaleLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}
