import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CondicionalComponent } from './directivas/condicional/condicional.component';
import { IteracionComponent } from './directivas/iteracion/iteracion.component';

@NgModule({
  declarations: [
    AppComponent,
    CondicionalComponent,
    IteracionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
