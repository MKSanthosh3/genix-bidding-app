import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/core/store/auth/auth.actions';

@Component({
  selector: 'app-signed-up-success',
  templateUrl: './signed-up-success.component.html',
  styleUrls: ['./signed-up-success.component.scss']
})
export class SignedUpSuccessComponent {
  constructor(private store: Store) {}

  onLogin(): void {
    this.store.dispatch(AuthActions.navigateToLogin());
  }
}
