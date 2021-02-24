import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [FormsModule, RouterTestingModule, StoreModule.forRoot({})],
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
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
