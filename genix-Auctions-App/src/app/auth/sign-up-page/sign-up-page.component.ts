import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/core/store/auth/auth.actions';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  signupForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private store: Store) {}
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      receiveEmails: [false]
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.valid) {
      const { firstName, lastName, email, password, receiveEmails } = this.signupForm.value;
      this.store.dispatch(AuthActions.register({ firstName, lastName, email, password, receiveEmails, rememberMe: false }));
    } else {
      console.error('Form is invalid');
    }
  }
}

