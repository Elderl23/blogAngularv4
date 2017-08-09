import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
})

export class HeaderModule { }