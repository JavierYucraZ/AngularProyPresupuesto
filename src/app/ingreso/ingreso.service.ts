import { Ingreso } from './ingreso.model';

export class IngresoService{
    arregloIngresos : Ingreso[] = [
        new Ingreso('Salario', 5000),
        new Ingreso('Venta de automovil', 700)
    ]

    eliminar(ingreso : Ingreso){
        const indice : number = this.arregloIngresos.indexOf(ingreso)
        this.arregloIngresos.splice(indice, 1)
    }
}