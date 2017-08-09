import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ng2-ckeditor';




import {routing} from './app.routing';
import { AppComponent } from './app.component';

import { IndexComponent } from './blog/indexpost/index.component';

import { FooterModule } from './blog/footer/footer.module';
import { HeaderModule } from './blog/header/header.module';
import { AsideModule } from './blog/aside/aside.module';

import { PostService } from './blog/indexpost/service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CKEditorModule,
    FooterModule,
    HeaderModule,
    AsideModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  providers: [
    PostService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
