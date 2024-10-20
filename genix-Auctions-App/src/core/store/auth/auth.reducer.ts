// import { createReducer, on } from '@ngrx/store';
// import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
// import { User } from './user.model';

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   error: string | null;
//   loading: boolean;
// }

// export const initialState: AuthState = {
//   user: null,
//   token: null,
//   error: null,
//   loading: false,
// };

// export const authReducer = createReducer(
//   initialState,
//   on(login, (state) => ({ ...state, loading: true, error: null })),
//   on(loginSuccess, (state, { user, token }) => ({
//     ...state,
//     user,
//     token,
//     loading: false,
//     error: null,
//   })),
//   on(loginFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   })),
//   on(register, (state) => ({ ...state, loading: true, error: null })),
//   on(registerSuccess, (state, { user }) => ({
//     ...state,
//     user,
//     loading: false,
//     error: null,
//   })),
//   on(registerFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   })),
//   on(logout, (state) => ({ ...state, loading: true, error: null })),
//   on(logoutSuccess, (state) => ({
//     ...state,
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   })),
//   on(logoutFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );

// old2

// import { createReducer, on } from '@ngrx/store';
// import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
// import { User } from './user.model';

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   error: string | null;
//   loading: boolean;
//   isLoggedIn: boolean;
// }

// export const initialState: AuthState = {
//   user: null,
//   token: null,
//   error: null,
//   loading: false,
//   isLoggedIn: false,
// };

// export const authReducer = createReducer(
//   initialState,
//   on(login, (state) => ({ ...state, loading: true, error: null })),
//   on(loginSuccess, (state, { user, token }) => ({
//     ...state,
//     user,
//     token,
//     loading: false,
//     error: null,
//     isLoggedIn: true,
//   })),
//   on(loginFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//     isLoggedIn: false,
//   })),
//   on(register, (state) => ({ ...state, loading: true, error: null })),
//   on(registerSuccess, (state, { user }) => ({
//     ...state,
//     user,
//     loading: false,
//     error: null,
//   })),
//   on(registerFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   })),
//   on(logout, (state) => ({ ...state, loading: true, error: null })),
//   on(logoutSuccess, (state) => ({
//     ...state,
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//     isLoggedIn: false,
//   })),
//   on(logoutFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );

// new
import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
import { User } from './user.model';

export interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user, token }) => ({
    ...state,
    user: { ...user },
    token,
    loading: false,
    error: null,
    isLoggedIn: true,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isLoggedIn: false,
  })),
  on(register, (state) => ({ ...state, loading: true, error: null })),
  on(registerSuccess, (state, { user }) => ({
    ...state,
    user: { ...user },
    loading: false,
    error: null,
    isLoggedIn: true,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(logout, (state) => ({ ...state, loading: true, error: null })),
  on(logoutSuccess, (state) => ({
    ...state,
    user: null,
    token: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  })),
  on(logoutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

