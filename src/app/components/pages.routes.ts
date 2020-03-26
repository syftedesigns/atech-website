import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InnovacionComponent } from './innovacion/innovacion.component';
import { LogisticaComponent } from './logistica/logistica.component';
import { ManufacturaComponent } from './manufactura/manufactura.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {Title: 'Tu socio - Your Patner - 你的搭檔'}
    },
    {
        path: 'catalogo',
        component: CatalogoComponent,
        data: {Title: 'Catálogo'}
    },
    {
        path: 'innovacion',
        component: InnovacionComponent,
        data: {Title: 'Innovación'}
    },
    {
        path: 'logistica',
        component: LogisticaComponent,
        data: {Title: 'Logística'}
    },
    {
        path: 'manufactura',
        component: ManufacturaComponent,
        data: {Title: 'Manufactura'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
