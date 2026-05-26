import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { PatioController } from "../controllers/PatioController";
import { ClienteController } from "../controllers/ClienteController";
import { TipoVeiculo } from "../models/TipoVeiculo";

export class Menu {

    private rl = readline.createInterface({ input, output });

    private patio: PatioController;
    private clienteCtrl: ClienteController;

    constructor(
        patio: PatioController,
        clienteCtrl: ClienteController
    ) {
        this.patio = patio;
        this.clienteCtrl = clienteCtrl;
    }

    public async exibir(): Promise<void> {

        while (true) {

            console.log("\n--- ESTACIONAMENTO ---");
            console.log("1. Cadastrar Cliente");
            console.log("2. Entrada de Veículo");
            console.log("3. Saída de Veículo");
            console.log("4. Sair");

            const op = await this.rl.question("Escolha: ");

            try {

                switch (op) {

                    case "1":

                        const nome = await this.rl.question("Nome: ");
                        const doc = await this.rl.question("CPF: ");

                        console.log(
                            this.clienteCtrl.cadastrar(nome, doc)
                        );

                        break;

                    case "2":

                        console.log("\n--- ENTRADA ---");

                        const cpf = await this.rl.question("CPF do Dono: ");

                        const cliente =
                            this.clienteCtrl.buscarPorDocumento(cpf);

                        const opcaoTipo =
                            await this.rl.question(
                                "Tipo (1-Carro | 2-Moto): "
                            );

                        let tipoEnum: TipoVeiculo;

                        if (opcaoTipo === "1") {

                            tipoEnum = TipoVeiculo.CARRO;

                        } else if (opcaoTipo === "2") {

                            tipoEnum = TipoVeiculo.MOTO;

                        } else {

                            console.log("Tipo inválido!");
                            break;
                        }

                        const placa =
                            await this.rl.question("Placa: ");

                        const marca =
                            await this.rl.question("Modelo: ");

                        console.log(
                            this.patio.registrarEntrada(
                                tipoEnum,
                                placa,
                                marca,
                                cliente
                            )
                        );

                        break;

                    case "3":

                        const p =
                            await this.rl.question(
                                "Placa para saída: "
                            );

                        const h = parseInt(
                            await this.rl.question("Horas: ")
                        );

                        const res =
                            this.patio.registrarSaida(p, h);

                        res.veiculo.imprimirDados();

                        console.log(
                            `TOTAL: R$ ${res.total},00`
                        );

                        break;

                    case "4":

                        this.rl.close();
                        return;

                    default:

                        console.log("Opção inválida.");
                }

            } catch (error) {

                if (error instanceof Error) {
                    console.log(`ERRO: ${error.message}`);
                } else {
                    console.log("Erro inesperado.");
                }
            }
        }
    }
}