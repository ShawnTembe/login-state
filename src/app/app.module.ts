import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LoginService } from './services/login.service';
import { LoginEffects } from './store/effects/login.effects';
import { reducers } from './store/app.states';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot( reducers ),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
