import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean {
    const token = localStorage.getItem('accessToken')

    if(token) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
