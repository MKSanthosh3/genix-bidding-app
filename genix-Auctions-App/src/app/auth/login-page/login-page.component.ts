import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/core/store/auth/auth.reducer';
import { login } from 'src/core/store/auth/auth.actions';
import { Observable } from 'rxjs';
import { selectAuthLoading , selectAuthError} from 'src/core/store/auth/auth.selector';
import { Router } from '@angular/router';
import * as AuthActions from 'src/core/store/auth/auth.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 
  loginForm!: FormGroup;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private fb: FormBuilder, private store: Store<AuthState>, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });

    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      this.store.dispatch(login({ email, password, rememberMe }));
    } else {
      console.error('Form is invalid');
    }
  }

  onSignUp(): void {
    this.store.dispatch(AuthActions.navigateToSignUp());
  }
}
