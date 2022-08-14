import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class AngularMaterialModule {}
