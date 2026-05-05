import { Cliente } from "./Cliente.js";

export abstract class Veiculo {
    constructor(
        public placa: string, 
        public marca: string,
        public proprietario?: Cliente
    ) {}

    abstract calcularValor(horas: number): number;

    public imprimirDados(): void {
        const dono = this.proprietario ? this.proprietario.nome : "Não informado";
        console.log(`Veículo: ${this.marca} | Placa: [${this.placa}] | Proprietário: ${dono}`);
    }
}