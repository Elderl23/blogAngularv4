import { NgModule } from '@angular/core';

import { DetalleComponent } from './detalle.component';
import { routing } from './detalle-routing.module';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { AsideModule } from '../aside/aside.module';

@NgModule({
  imports: [
    routing,
    HighlightJsModule,
    FooterModule,
    HeaderModule,
    AsideModule
  ],
  declarations: [
    DetalleComponent
  ],
  providers: [
    HighlightJsService
  ],
})
export class DetalleModule {}


