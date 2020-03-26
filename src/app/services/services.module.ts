import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material.module';
import { MenuService } from './menu/menu.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [
    MenuService
  ]
})
export class ServicesModule { }
