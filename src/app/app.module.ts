import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './components/pages.component';
import { APP_ROUTES } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { StaticModule } from './components/static/static.module';
import { ServicesModule } from './services/services.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    StaticModule,
    ServicesModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_token.string
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
