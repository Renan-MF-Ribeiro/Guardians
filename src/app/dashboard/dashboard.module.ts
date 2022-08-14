import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { FiltroDialogComponent } from './filtro-dialog/filtro-dialog.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CardCarroComponent } from './util/card-carro/card-carro.component';
import { ContatoComponent } from './contato/contato.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    FiltroDialogComponent,
    CardCarroComponent,
    ContatoComponent,
    AgendaComponent,
    PerfilComponent,
  ],
  entryComponents: [FiltroDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    IvyCarouselModule,
  ],
})
export class DashboardModule {}
