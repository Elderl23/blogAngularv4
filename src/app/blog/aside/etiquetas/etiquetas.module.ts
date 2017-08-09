import { NgModule } from '@angular/core';

import { EtiquetasComponent } from './etiquetas.component';
import { EtiquetasRouting } from './etiquetas.routing';

import { FooterModule } from '../../footer/footer.module';
import { HeaderModule } from '../../header/header.module';
import { AsideModule } from '../../aside/aside.module';


@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    AsideModule,
    EtiquetasRouting
  ],
  declarations: [
    EtiquetasComponent
  ]
})
export class EtiquetasModule {}


