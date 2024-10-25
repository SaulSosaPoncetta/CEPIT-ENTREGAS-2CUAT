import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class MAgricola extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: Titular
    ) {
        super(marca, modelo, "M Agricola", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}