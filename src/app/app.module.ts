import { NgModule, enableProdMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './';

import { HttpModule } from '@angular/http';
import { Angular2DataTableModule } from 'angular2-data-table';


@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  imports:      [
    Angular2DataTableModule,
    BrowserModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
