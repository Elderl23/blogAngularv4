import { NgModule } from '@angular/core';

import { DetalleComponent } from './detalle.component';
import { routing } from './detalle-routing.module';

// import {dateFormatPipe} from '../pipes/fechas'

import { PostService } from './service';

//Para habilitar las directivas como ngFor
import { CommonModule } from '@angular/common'; //<-- Se cambia por BrowserModule

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { AsideModule } from '../aside/aside.module';

@NgModule({
  imports: [
    routing,
    HighlightJsModule,
    CommonModule,
    // dateFormatPipe,
    FooterModule,
    HeaderModule,
    AsideModule
  ],
  declarations: [
    DetalleComponent
  ],
  providers: [
    HighlightJsService,
    PostService
  ],
})
export class DetalleModule {}


