import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

// Authentication Actions
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string;rememberMe:any }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ firstName: string; lastName: string; email: string; password: string; receiveEmails: boolean; rememberMe: boolean }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: User }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);

export const navigateToLogin = createAction('[Auth] Navigate to Login');

export const navigateToSignUp = createAction('[Auth] Navigate to Sign Up');