import { createFeatureSelector } from "@ngrx/store";

import * as login from "./reducers/login.reducers";

export interface AppState {
  loginState: login.State;
}

export const reducers = {
  login: login.reducer,
};

export const selectLoginState = createFeatureSelector<AppState>("login");
