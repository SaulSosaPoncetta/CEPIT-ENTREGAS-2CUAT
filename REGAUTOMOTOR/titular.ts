export class Titular {
    constructor(
        public nombre: string,
        public apellido: string,
        public documento: string,
        public domicilio: string,
        public estadoCivil: string
    ) { }

    descripcion(): string {
        return `${this.nombre} ${this.apellido}, Documento: ${this.documento}`;
    }
}