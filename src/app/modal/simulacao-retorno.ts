

    export interface SimulacaoRetorno {
        nomePessoa: string;
        cpf: string;
        valorSegurado: number;
        numeroContratoEmprestimo: string;
        fimContratoEmprestimo: string;
        dataNascimento: string;
        produtoEscolhido: string;
        valorTotalPremio: number;
    }

    export interface Retorno {
        data: SimulacaoRetorno[];
        errors: any[];
    }
