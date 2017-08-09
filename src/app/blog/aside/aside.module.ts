import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AsideComponent } from './aside.component';



import { CategoriasService, EtiquetasService } from '../aside/service';

//Para habilitar las directivas como ngFor
import { CommonModule } from '@angular/common'; //<-- Se cambia por BrowserModule

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    AsideComponent
  ],
  declarations: [
    AsideComponent
  ],
  providers: [CategoriasService,EtiquetasService],
})

export class AsideModule {}