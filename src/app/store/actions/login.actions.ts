import { Action } from '@ngrx/store';

export const LOGIN = '[LOGINState] LOGIN';
export const LOGIN_SUCCESS = '[LOGINState] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[LOGINState] LOGIN_FAILURE';
export const LOGOUT = '[LOGINState] LOGOUT';

export class LogIn implements Action {
  readonly type = LOGIN;
  constructor(public readonly payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public readonly payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public readonly payload: any) {}
}
export class LogOut implements Action {
  readonly type = LOGOUT;
}

export type All = LogIn | LogInSuccess | LogInFailure | LogOut;
