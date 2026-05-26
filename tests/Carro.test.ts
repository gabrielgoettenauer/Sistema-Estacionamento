import { Carro } from "../src/models/Carro";

describe("Teste de cálculo do Carro", () => {

    test("Deve calcular corretamente 3 horas", () => {

        const carro = new Carro("AAA1111", "Honda");

        const valor = carro.calcularValor(3);

        expect(valor).toBe(30);
    });

    test("Deve respeitar valor máximo", () => {

        const carro = new Carro("AAA1111", "Honda");

        const valor = carro.calcularValor(10);

        expect(valor).toBe(70);
    });
});