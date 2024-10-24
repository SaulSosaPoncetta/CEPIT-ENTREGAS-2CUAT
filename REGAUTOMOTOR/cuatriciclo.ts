import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Cuatriciclo extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: string,
    ) {
        super(marca, modelo, "Cuatriciclo", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}