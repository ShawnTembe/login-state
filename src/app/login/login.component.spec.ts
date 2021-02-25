import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';

import { LogInComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import * as fromReducer from '../store/reducers/login.reducers';
import * as fromActions from '../store/actions/login.actions';
import { hot, cold } from 'jasmine-marbles';
import * as LoginAction from '../store/actions/login.actions';
import { LoginEffects } from '../store/effects/login.effects';
import { Observable } from 'rxjs/Observable';
import { provideMockActions } from '@ngrx/effects/testing';
import { LoginService} from '../services/login.service';
import { initialState } from '../store/reducers/login.reducers';


describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let h2: HTMLElement;
  let el: HTMLElement;
  let actions$: Observable<any>;
  let effects: LoginEffects;
  let user: User = new User();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [FormsModule, RouterTestingModule, StoreModule.forRoot({})],
      providers: [
        LoginEffects,
        LoginService,
        provideMockActions(() => actions$)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have <h2> with  Login', () => {
    const loginElement: HTMLElement = fixture.nativeElement;
    h2 = loginElement.querySelector('h2');
    expect(h2.textContent).toEqual('Login');
  });
  
  it('should create a FormGroup comprised of FormControls', () => {
    fixture.detectChanges();
    expect(component.user instanceof User).toBe(true);
  });

  it('Should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  }));

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = fromReducer.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('Should call the OnSubmit method', () => {
    fakeAsync(() => {
      fixture.detectChanges();
      spyOn(component, 'onSubmit');
      el = fixture.debugElement.query(By.css('Login')).nativeElement;
      el.click();
      expect(component.onSubmit).toHaveBeenCalledTimes(0);
    });
  });
  

  it('SHOULD load data', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = new fromActions.LogIn(payload);
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
