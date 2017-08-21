import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComponent} from './detalle.component';

const routes: Routes = [
  { 
    path: ':slug',
    component: DetalleComponent 
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

