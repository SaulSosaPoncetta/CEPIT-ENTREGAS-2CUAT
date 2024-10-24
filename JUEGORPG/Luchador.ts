import { Personaje } from './Personaje';

export class Luchador extends Personaje {
    fuerza: number;

    constructor(nombre: string) {
        super(nombre);
        this.fuerza = 50;
    }

    atacar(): void {
        console.log(`${this.nombre} golpea con su espada.`);
        this.fuerza -= 5;
    }

    defender(): void {
        console.log(`${this.nombre} bloquea el ataque con su escudo.`);
    }

    subirNivel(): void {
        super.subirNivel();
        this.fuerza += 10;
        console.log(`${this.nombre} ahora tiene ${this.fuerza} de fuerza.`);
    }
}

export default Luchador;