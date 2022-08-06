import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService implements CanActivate {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  canActivate(): boolean {
    // console.log(Login.loginUser)
    if (sessionStorage.getItem('token') == null) this.router.navigateByUrl('');
    return sessionStorage.getItem('token') != null;
  }
}
