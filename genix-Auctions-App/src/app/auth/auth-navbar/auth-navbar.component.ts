import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/core/store/auth/auth.actions';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss']
})
export class AuthNavbarComponent {
  constructor(private store: Store) {}
}
