// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { AuthService } from './auth.service';
// import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable()
// export class AuthEffects {
//   constructor(private actions$: Actions, private authService: AuthService) {}

//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(login),
//       switchMap(({ email, password }) =>
//         this.authService.login(email, password).pipe(
//           map((response) => loginSuccess({ user: response.user, token: response.token })),
//           catchError((error) => of(loginFailure({ error: error.message })))
//         )
//       )
//     )
//   );

//   register$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(register),
//       switchMap(({ firstName, lastName, email, password, receiveEmails, rememberMe }) =>
//         this.authService.register(firstName, lastName, email, password, receiveEmails, rememberMe).pipe(
//           map((user) => registerSuccess({ user })),
//           catchError((error) => of(registerFailure({ error: error.message })))
//         )
//       )
//     )
//   );

//   logout$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(logout),
//       switchMap(() =>
//         this.authService.logout().pipe(
//           map(() => logoutSuccess()),
//           catchError((error) => of(logoutFailure({ error: error.message })))
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure, navigateToLogin,navigateToSignUp  } from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(login),
  //     switchMap(({ email, password }) =>
  //       this.authService.login(email, password).pipe(
  //         map((response) => loginSuccess({ user: response.user, token: response.token })),
  //         catchError((error) => of(loginFailure({ error: error.message })))
  //       )
  //     )
  //   )
  // );

  // loginSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(loginSuccess),
  //       tap(({ token }) => {
  //         try {
  //           const decodedToken: any = jwtDecode(token);
  //           if (decodedToken && decodedToken.exp && Date.now() < decodedToken.exp * 1000) {
  //             // Update the user info in the state and navigate to the welcome page
  //             this.router.navigate(['/auctions/welcome']);
  //           }
  //         } catch (error) {
  //           console.error('Invalid token', error);
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );



  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((response) => {
            const user = response.user;
            const token = response.token;
            return loginSuccess({ user, token });
          }),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ user, token }) => {
          try {
            const decodedToken: any = jwtDecode(token);
            if (decodedToken && decodedToken.exp && Date.now() < decodedToken.exp * 1000) {
              this.router.navigate(['/auctions/welcome']);
              // Save user info in local storage or session storage
              localStorage.setItem('user', JSON.stringify(user));
              localStorage.setItem('token', token);
            }
          } catch (error) {
            console.error('Invalid token', error);
          }
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ firstName, lastName, email, password, receiveEmails, rememberMe }) =>
        this.authService.register(firstName, lastName, email, password, receiveEmails, rememberMe).pipe(
          map((user) => registerSuccess({ user })),
          catchError((error) => of(registerFailure({ error: error.message })))
        )
      )
    )
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(() => this.router.navigate(['/auth-dashboard/success']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error) => of(logoutFailure({ error: error.message })))
        )
      )
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => this.router.navigate(['/auctions/auctions-dashboard']))
      ),
    { dispatch: false }
  );


  
  navigateToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToLogin),
        tap(() => this.router.navigate(['/auth-dashboard/login']))
      ),
    { dispatch: false }
  );

  navigateToSignUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToSignUp),
        tap(() => this.router.navigate(['/auth-dashboard/signup']))
      ),
    { dispatch: false }
  );
}
