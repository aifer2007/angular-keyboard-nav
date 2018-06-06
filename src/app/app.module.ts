import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyboardNavModule } from 'angular-keyboard-nav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KeyboardNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
