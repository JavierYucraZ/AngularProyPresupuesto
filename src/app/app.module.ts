/*Modulos o librerias*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Componentes*/
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';

/* Servicios */
import { IngresoService } from './ingreso/ingreso.service'
import { EgresoService } from './egreso/egreso.service'

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    IngresoService,
    EgresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
