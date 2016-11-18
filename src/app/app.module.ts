import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './';

import { HttpModule } from '@angular/http';
import { Angular2DataTableModule } from 'angular2-data-table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    Angular2DataTableModule,
    BrowserModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
