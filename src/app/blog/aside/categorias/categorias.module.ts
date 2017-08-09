import { NgModule } from '@angular/core';

import { CategoriasComponent } from './categorias.component';
import { CategoriasRouting } from './categorias.routing';

import { FooterModule } from '../../footer/footer.module';
import { HeaderModule } from '../../header/header.module';
import { AsideModule } from '../../aside/aside.module';


@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    AsideModule,
    CategoriasRouting
  ],
  declarations: [
    CategoriasComponent
  ]
})
export class CategoriasModule {}


