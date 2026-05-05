import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo {
    public calcularValor(horas: number): number {
        const total = horas * 10;
        return Math.min(total, 70);
    }
}