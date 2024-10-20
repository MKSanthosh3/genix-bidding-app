import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignedUpSuccessComponent } from './signed-up-success/signed-up-success.component';
import { AuthComponent } from './auth.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from 'src/core/store/auth/auth.reducer';
import { AuthEffects } from 'src/core/store/auth/auth.effects';
import { AuthService } from 'src/core/store/auth/auth.service';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    SignedUpSuccessComponent,
    AuthComponent,
    AuthNavbarComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),   
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
