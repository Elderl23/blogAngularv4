import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComponent} from './categorias.component';

const routes: Routes = [
  {
    path: 'lista/:id',
    component: CategoriasComponent,
    // resolve: {
    //   user: CategoriasComponent
    // }
  }
];

export const CategoriasRouting: ModuleWithProviders = RouterModule.forChild(routes);