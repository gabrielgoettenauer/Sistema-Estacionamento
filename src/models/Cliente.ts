export class Cliente {
    constructor(
        public nome: string,
        public documento: string
    ) {}

    public obterDados(): string {
        return `Cliente: ${this.nome} | Doc: ${this.documento}`;
    }
}