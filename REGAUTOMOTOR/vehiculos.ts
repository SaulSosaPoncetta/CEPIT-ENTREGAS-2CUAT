import { Titular } from './titular';

export class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public tipo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: Titular
    ) { }

    descripcion(): string {
        return `${this.tipo}: ${this.marca} ${this.modelo}`;
    }
}

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

export class Moto extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: Titular
    ) {
        super(marca, modelo, "Moto", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}

export class Camion extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        titular: Titular
    ) {
        super(marca, modelo, "Camion", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}

export class Cuatriciclo extends Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public numeroChasis: string,
        public numeroMotor: string,
        public numeroPatente: string,
        public titular: Titular
    ) {
        super(marca, modelo, "Cuatriciclo", numeroChasis, numeroMotor, numeroPatente, titular);
    }
}
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
