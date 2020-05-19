import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

import { IngresoService } from './ingreso/ingreso.service'
import { EgresoService } from './egreso/egreso.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Presupuesto';

  ingresos : Ingreso[] = []
  egresos : Egreso[] = []

  constructor(private ingresoService : IngresoService, private egresoService : EgresoService){
    this.ingresos = ingresoService.arregloIngresos
    this.egresos = egresoService.arregloEgresos
  }

  obtenerIngresoTotal(){
    let ingresoTotal : number = 0
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor
    })
    return ingresoTotal
  }

  obtenerEgresoTotal(){
    let egresoTotal : number = 0
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor
    })
    return egresoTotal
  }

  obtenerPorcentajeTotal(){
    return this.obtenerEgresoTotal()/this.obtenerIngresoTotal()
  }

  obtenerPresupuestoTotal(){
    return this.obtenerIngresoTotal()-this.obtenerEgresoTotal()
  }
}
