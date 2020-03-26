import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { InnovacionComponent } from './innovacion/innovacion.component';
import { LogisticaComponent } from './logistica/logistica.component';
import { ManufacturaComponent } from './manufactura/manufactura.component';
import { AngularMaterialModule } from '../angular-material.module';
import { PagesRoutingModule } from './pages.routes';
import { StaticModule } from './static/static.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    CatalogoComponent,
    HomeComponent,
    InnovacionComponent,
    LogisticaComponent,
    ManufacturaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularMaterialModule,
    PagesRoutingModule,
    StaticModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_token.string
    })
  ]
})
export class PagesModule { }
