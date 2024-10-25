import { Titular } from './titular';

export class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public tipo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: string,
    ) { }

    public descripcion(): string {
        return `${this.tipo}: ${this.marca} ${this.modelo}`;
    }
}