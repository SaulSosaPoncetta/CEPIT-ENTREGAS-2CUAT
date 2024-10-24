import { Vehiculo } from './vehiculos';
import { Titular } from './titular';

export class Registro {
    private vehiculos: Vehiculo[] = [];
    private titulares: Titular[] = [];

    constructor(
        public dueno: string,
        public direccion: string,
        public numeroRegistro: string
    ) { }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public eliminarVehiculo(numeroChasis: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.numeroChasis !== numeroChasis);
    }

    public modificarVehiculo(numeroChasis: string, nuevoVehiculo: Vehiculo): void {
        const index = this.vehiculos.findIndex(v => v.numeroChasis === numeroChasis);
        if (index !== -1) {
            this.vehiculos[index] = nuevoVehiculo;
        }
    }

    public listarVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    public agregarTitular(titular: Titular): void {
        this.titulares.push(titular);
    }

    public eliminarTitular(documento: string): void {
        this.titulares = this.titulares.filter(t => t.documento !== documento);
    }

    public modificarTitular(documento: string, nuevoTitular: Titular): void {
        const index = this.titulares.findIndex(t => t.documento === documento);
        if (index !== -1) {
            this.titulares[index] = nuevoTitular;
        }
    }

    public listarTitulares(): Titular[] {
        return this.titulares;
    }
}