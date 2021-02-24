import * as Actions from './login.actions';

describe('Store > LOGINState > All', () => {
  it('SHOULD create a LogIn action', () => {
    const payload = { id: 1, value: {} };
    const action = new Actions.LogIn(payload);
    expect(action.type).toEqual(Actions.LOGIN);
  });

  it('SHOULD create a LogInSuccess action containing a payload', () => {
    const payload = { id: 1, value: {} };
    const action = new Actions.LogInSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.LOGIN_SUCCESS,
      payload,
    });
  });

  it('SHOULD create a LogInFailure action containing a payload', () => {
    const payload = { id: 1, value: {} };
    const action = new Actions.LogInFailure(payload);

    expect({ ...action }).toEqual({
      type: Actions.LOGIN_FAILURE,
      payload,
    });
  });
  it('SHOULD create a LogOUT action ', () => {
    const action = new Actions.LogOut();

    expect({ ...action }).toEqual({
      type: Actions.LOGOUT,
    });
  });
});
