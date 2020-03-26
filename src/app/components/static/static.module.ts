import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OverlayComponent } from './overlay/overlay.component';
import { BannerComponent } from './banner/banner.component';
import { MapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { CasesComponent } from './cases/cases.component';
import { Footerv2Component } from './footer/v2/footerv2/footerv2.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Footerv3Component } from './footer/v3/footerv3/footerv3.component';



@NgModule({
  declarations: [
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    OverlayComponent,
    BannerComponent,
    MapComponent,
    CasesComponent,
    Footerv2Component,
    Footerv3Component,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_token.string
    })
  ],
  exports: [
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    OverlayComponent,
    BannerComponent,
    MapComponent,
    CasesComponent,
    Footerv2Component,
    Footerv3Component,
    BreadcrumbsComponent
  ],
  entryComponents: [
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    OverlayComponent,
    BannerComponent,
    MapComponent,
    CasesComponent,
    Footerv2Component,
    Footerv3Component,
    BreadcrumbsComponent
  ]
})
export class StaticModule { }
