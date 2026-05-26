import { PatioController } from "../src/controllers/PatioController";
import { TipoVeiculo } from "../src/models/TipoVeiculo";

describe("Teste do PatioController", () => {

    test("Não deve permitir placa duplicada", () => {

        const patio = new PatioController();

        patio.registrarEntrada(
            TipoVeiculo.CARRO,
            "ABC1234",
            "Honda"
        );

        expect(() => {

            patio.registrarEntrada(
                TipoVeiculo.CARRO,
                "ABC1234",
                "Toyota"
            );

        }).toThrow("Veículo já estacionado.");
    });
});