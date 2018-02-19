import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (localStorage.getItem('currentUser')) {
        this.authService.checkToken().subscribe((res: any) => {
          resolve(true);
        }, err => {
          this.router.navigate(['/login']);
          resolve(false);
        });
      } else {
        this.router.navigate(['/login']);
        resolve(false);
      }
    });
  }
}
