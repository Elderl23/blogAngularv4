import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    FormsModule,
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent
  ],
})

export class FooterModule { }
