import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material.module';
import { MenuService } from './menu/menu.service';
import { ContactService } from './contact/contact.service';
import { MailchimpService } from './mail/mailchimp.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularMaterialModule
  ],
  providers: [
    MenuService,
    ContactService,
    MailchimpService
  ]
})
export class ServicesModule { }
