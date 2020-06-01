import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CondicionalComponent } from './directivas/condicional/condicional.component';
import { IteracionComponent } from './directivas/iteracion/iteracion.component';
import { EstilosComponent } from './directivas/estilos/estilos.component';
import { ClasesComponent } from './directivas/clases/clases.component';
import { CondicionalCaseComponent } from './directivas/condicional-case/condicional-case.component';

@NgModule({
  declarations: [
    AppComponent,
    CondicionalComponent,
    IteracionComponent,
    EstilosComponent,
    ClasesComponent,
    CondicionalCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
