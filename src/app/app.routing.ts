import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { IndexComponent } from './blog/indexpost/index.component';


const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'blog',
        loadChildren: 'app/blog/detallepost/detalle.module#DetalleModule' 
    },
    {   path: 'categorias',
        loadChildren: 'app/blog/aside/categorias/categorias.module#CategoriasModule' 
    },
    {
        path: 'etiquetas',
        loadChildren: 'app/blog/aside/etiquetas/etiquetas.module#EtiquetasModule' 
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
