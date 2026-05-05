import { Menu } from "./views/Menu.js";
import { PatioController } from "./controllers/PatioController.js";
import { ClienteController } from "./controllers/ClienteController.js";

const patioController = new PatioController();
const clienteController = new ClienteController();

const app = new Menu(patioController, clienteController);

app.exibir().catch(err => {
    console.error("Erro crítico no sistema:", err);
});




// meetodo de cadastrar cliente. FEITO
// metodo de pagamento
// implemtentar MVC via controller ou serviço. FEITO
// injeção de dependencias. FEITO
// implementar o enum. FEITO
// implementar interface e classe abstrata. 