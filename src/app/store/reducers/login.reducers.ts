import { User } from '../../models/user';
// import { Actions, All } from '../actions/login.actions';
import * as Actions from '../actions/login.actions';

export interface State {
  // there should be a user object
  userData: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  userData: null,
  errorMessage: null,
};

export function reducer(state = initialState, action: Actions.All): State {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS: {
      return {
        ...state,

        userData: action.payload.user.userName,
      };
    }
    case Actions.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect username and/or password.',
      };
    }
    case Actions.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
