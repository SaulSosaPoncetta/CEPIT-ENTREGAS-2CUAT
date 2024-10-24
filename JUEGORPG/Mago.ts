import { Personaje } from './Personaje';

export class Mago extends Personaje {
    mana: number;

    constructor(nombre: string) {
        super(nombre);
        this.mana = 100;
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo mágico.`);
        this.mana -= 10;
    }

    defender(): void {
        console.log(`${this.nombre} usa un escudo mágico para defenderse.`);
    }

    subirNivel(): void {
        super.subirNivel();
        this.mana += 20;
        console.log(`${this.nombre} ahora tiene ${this.mana} de maná.`);
    }
}

export default Mago;