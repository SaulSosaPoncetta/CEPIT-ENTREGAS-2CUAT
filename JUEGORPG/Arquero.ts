import { Personaje } from './Personaje';

export class Arquero extends Personaje {
    flechas: number;

    constructor(nombre: string) {
        super(nombre);
        this.flechas = 20;
    }

    atacar(): void {
        if (this.flechas > 0) {
            console.log(`${this.nombre} dispara una flecha.`);
            this.flechas -= 1;
        } else {
            console.log(`${this.nombre} no tiene flechas.`);
        }
    }

    defender(): void {
        console.log(`${this.nombre} esquiva el ataque.`);
    }

    subirNivel(): void {
        super.subirNivel();
        this.flechas += 10;
        console.log(`${this.nombre} ahora tiene ${this.flechas} flechas.`);
    }
}

export default Arquero;
