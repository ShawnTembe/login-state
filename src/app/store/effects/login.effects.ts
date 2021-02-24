import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import * as Actionss from '../actions/login.actions';
import { LoginService } from '../../services/login.service';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(Actionss.LOGIN),
    map((action: Actionss.LogIn) => action.payload),
    switchMap((user) => {
      return this.loginService.logIn(user.username, user.password).pipe(
        map((user) => {
          return new Actionss.LogInSuccess({ user });
        }),
        catchError((error) => {
          console.log(error);
          return of(new Actionss.LogInFailure({ error: error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(Actionss.LOGIN_SUCCESS),
    tap((user) => {
      console.log('inside LogInSuccess Effect ', user);
      localStorage.setItem('user', user);
      this.router.navigateByUrl('/landing');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(Actionss.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(Actionss.LOGOUT),
    tap((user) => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
  );
}
