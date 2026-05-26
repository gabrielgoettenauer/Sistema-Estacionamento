import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    public calcularValor(horas: number): number {
        const total = horas * 5;
        return Math.min(total, 35); 
    }
}