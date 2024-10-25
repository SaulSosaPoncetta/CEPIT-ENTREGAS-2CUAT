import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Camion extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: string,
    ) {
        super(marca, modelo, "Camion", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}