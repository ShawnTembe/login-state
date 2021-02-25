import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { hot, cold } from 'jasmine-marbles';

import { User } from './../../models/user';
import { LoginEffects } from './login.effects';
import { LoginService} from './../../services/login.service';
import * as LoginAction from './../actions/login.actions';

describe('LoginEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginEffects;
  const user: User = {
    username: 'test@test.com',
    password: '123456'
  };
  const error: any = { status: 401, message: '401 Unauthorized Error' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        LoginEffects,
        LoginService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should login successful', () => {
    const action = new LoginAction.LogIn({
      username: 'test@test.com',
      password: '123456'
    });
    const completion = new LoginAction.LogInSuccess({ user });
    actions$ = hot('a|', { a: action });
    const expected = cold('b|', { b: completion });

    expect(effects.LogInSuccess).toBeTruthy(expected);
  });

  it('should login fail', () => {
    const action = new LoginAction.LogIn({
      username: 'abc',
      password: '1236'
    });
    const completion = new LoginAction.LogInFailure({ user });
    actions$ = hot('a|', { a: action });
    const expected = cold('b|', { b: completion });

    expect(effects.LogInFailure).toBeTruthy(expected);
  });

});
