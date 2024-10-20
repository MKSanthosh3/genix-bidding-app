import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthComponent } from './auth.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignedUpSuccessComponent } from './signed-up-success/signed-up-success.component';

const routes: Routes = [
  { path: 'auth', redirectTo: 'auth-dashboard', pathMatch: 'full' },
  {
    path: 'auth-dashboard', component: AuthComponent,
    children: [     
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignUpPageComponent },
      { path: 'success', component: SignedUpSuccessComponent },      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,   
    RouterModule.forChild(routes),
  ],  
  exports: [RouterModule]
})
export class AuthRoutingModule { }
