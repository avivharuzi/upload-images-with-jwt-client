import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
