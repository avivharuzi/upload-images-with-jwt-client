import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.loginService.logout();
  }
}
