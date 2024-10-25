import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Moto extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: string,
    ) {
        super(marca, modelo, "Moto", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}