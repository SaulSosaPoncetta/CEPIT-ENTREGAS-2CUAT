import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Auto extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public tipo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: Titular
    ) {
        super(marca, modelo, tipo, numeroChasis, numeroMotor, numeroPatente, titular);
    }
}