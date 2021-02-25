import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AppState, selectLoginState } from '../store/app.states';
import { LogIn } from '../store/actions/login.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LogInComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectLoginState);
  }

  ngOnInit():void {
    this.getState.subscribe((state) => {});
  }

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password,
    };
    this.store.dispatch(new LogIn(payload));
  }
}
