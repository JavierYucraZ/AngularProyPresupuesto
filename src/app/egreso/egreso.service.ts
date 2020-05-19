import { Egreso } from './egreso.model';

export class EgresoService{
    arregloEgresos : Egreso[] = [
        new Egreso('Renta de departamento', 900),
        new Egreso('Compra de ropa', 200)
    ]
}