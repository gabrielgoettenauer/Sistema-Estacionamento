import { Cliente } from "../models/Cliente.js";

export class ClienteController {
    private clientes: Cliente[] = [];

    public cadastrar(nome: string, documento: string): string {
        const jaExiste = this.clientes.find(c => c.documento === documento);
        if (jaExiste) return "Documento já cadastrado.";

        this.clientes.push(new Cliente(nome, documento));
        return ` Cliente ${nome} cadastrado!`;
    }

    public buscar(documento: string): Cliente | undefined;
    public buscar(nome: string): Cliente[];
    public buscar(param: string): Cliente | Cliente[] | undefined {
        const clientePorDoc = this.clientes.find(c => c.documento === param);
        
        if (clientePorDoc) {
            return clientePorDoc;
        }

        const clientesPorNome = this.clientes.filter(c => 
            c.nome.toLowerCase().includes(param.toLowerCase())
        );

        return clientesPorNome.length > 0 ? clientesPorNome : undefined;
    }

    public buscarPorDocumento(documento: string): Cliente | undefined {
        return this.clientes.find(c => c.documento === documento);
    }
}