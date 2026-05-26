import { Carro } from "../models/Carro";
import { Moto } from "../models/Moto";
import { Veiculo } from "../models/Veiculo";
import { Cliente } from "../models/Cliente";
import { TipoVeiculo } from "../models/TipoVeiculo";
import { PatioException } from "../exceptions/PatioException";

export class PatioController {
    private veiculos: Veiculo[] = [];
    
    private readonly VAGAS_CARRO = 5;
    private readonly VAGAS_MOTO = 5;

    public registrarEntrada(
        tipo: TipoVeiculo,
        placa: string,
        marca: string,
        dono?: Cliente
    ): string {

        const existente = this.veiculos.find(v => v.placa === placa);

        if (existente) {
            throw new PatioException("Veículo já estacionado.");
        }

        let novo: Veiculo;

        switch (tipo) {

            case TipoVeiculo.CARRO:

                if (this.contar(TipoVeiculo.CARRO) >= this.VAGAS_CARRO) {
                    throw new PatioException("Vagas esgotadas para Carros.");
                }

                novo = new Carro(placa, marca, dono);
                break;

            case TipoVeiculo.MOTO:

                if (this.contar(TipoVeiculo.MOTO) >= this.VAGAS_MOTO) {
                    throw new PatioException("Vagas esgotadas para Motos.");
                }

                novo = new Moto(placa, marca, dono);
                break;
        }

        this.veiculos.push(novo);

        return `[${placa}] estacionado com sucesso!`;
    }

    public registrarSaida(placa: string, horas: number) {

        const veiculo = this.veiculos.find(v => v.placa === placa);

        if (!veiculo) {
            throw new PatioException("Veículo não encontrado.");
        }

        const valor = veiculo.calcularValor(horas);

        this.veiculos = this.veiculos.filter(v => v.placa !== placa);

        return {
            veiculo,
            total: valor
        };
    }

    private contar(tipo: TipoVeiculo): number {

        const classeAlvo =
            tipo === TipoVeiculo.CARRO
                ? Carro
                : Moto;

        return this.veiculos.filter(
            v => v instanceof classeAlvo
        ).length;
    }
}