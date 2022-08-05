import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';

const routes: Routes = [
  { path: '',  component: HomeComponent,children:[
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'reset',  component: ResetSenhaComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
