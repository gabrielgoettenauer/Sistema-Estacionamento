import { Moto } from "../src/models/Moto";

describe("Teste de cálculo da Moto", () => {

    test("Deve calcular corretamente 3 horas", () => {

        const moto = new Moto("BBB2222", "Yamaha");

        const valor = moto.calcularValor(3);

        expect(valor).toBe(15);
    });

    test("Deve respeitar valor máximo", () => {

        const moto = new Moto("BBB2222", "Yamaha");

        const valor = moto.calcularValor(10);

        expect(valor).toBe(35);
    });
});