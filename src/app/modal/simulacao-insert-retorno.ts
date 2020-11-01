

    export interface SimulacaoRet {
        nomePessoa: string;
        cpf: string;
        valorSegurado: number;
        numeroContratoEmprestimo: string;
        fimContratoEmprestimo: string;
        dataNascimento: string;
        produtoEscolhido: string;
        valorTotalPremio: number;
    }

    export interface SimulacaoInsertRet {
        data: SimulacaoRet;
        errors: any[];
    }

