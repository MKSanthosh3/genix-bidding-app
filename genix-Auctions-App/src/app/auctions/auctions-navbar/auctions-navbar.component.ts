import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/core/store/auth/auth.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/core/store/auth/user.model';
import { selectUser, selectIsLoggedIn } from 'src/core/store/auth/auth.selector';


@Component({
  selector: 'app-auctions-navbar',
  templateUrl: './auctions-navbar.component.html',
  styleUrls: ['./auctions-navbar.component.scss']
})
export class AuctionsNavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  currentUrl: string = '';
  user$!: Observable<User | null>;
  isLoggedIn$!: Observable<boolean>;
  
  constructor(private store: Store, private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.navigateToLogin());
  }
  onSignUp(): void {
    this.store.dispatch(AuthActions.navigateToSignUp());
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
