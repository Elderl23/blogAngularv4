import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtiquetasComponent} from './etiquetas.component';

const routes: Routes = [
  {
    path: 'lista/:id',
    component: EtiquetasComponent,
  }
];

export const EtiquetasRouting: ModuleWithProviders = RouterModule.forChild(routes);