import * as fromReducer from './login.reducers';
import * as fromActions from '../actions/login.actions';
import { User } from '../../models/user';

describe('Store > Data > Reducer', () => {
  afterEach(() => {
    fromReducer.initialState.userData = null;
    fromReducer.initialState.errorMessage = null;
  });

  it('SHOULD return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('SHOULD load data', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = new fromActions.LogIn(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state.userData).toEqual(payload);
  });

  it('SHOULD load failure data', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = new fromActions.LogInFailure(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state.userData).toEqual(payload);
  });
  
  it('SHOULD load logout data', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = new fromActions.LogOut();
    const state = fromReducer.reducer(initialState, action);

    expect(state.userData).toEqual(payload);
  });
});
