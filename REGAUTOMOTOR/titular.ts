export class Titular {
    constructor(
        public nombre: string,
        public apellido: string,
        public documento: string,
        public domicilio: string,
        public estadoCivil: string
    ) { }

    public descripcion(): string {
        return `${this.nombre} ${this.apellido}, Documento: ${this.documento}`;
    }
}