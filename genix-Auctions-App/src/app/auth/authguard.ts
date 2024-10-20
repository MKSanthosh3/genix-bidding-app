import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from 'src/core/store/auth/auth.reducer';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<{ auth: AuthState }>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select('auth').pipe(
      map((authState) => {
        if (authState.isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['/auth/auth-dashboard/login']);
          return false;
        }
      })
    );
  }
}
