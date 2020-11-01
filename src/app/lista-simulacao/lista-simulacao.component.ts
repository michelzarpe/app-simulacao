import { Component, OnInit } from '@angular/core';
import { Retorno, SimulacaoRetorno } from '../modal/simulacao-retorno';
import {SimulacaoService} from 'src/app/service/simulacao.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lista-simulacao',
  templateUrl: './lista-simulacao.component.html',
  styleUrls: ['./lista-simulacao.component.css']
})
export class ListaSimulacaoComponent implements OnInit {

  displayedColumns: string[] = ['nomePessoa', 'cpf', 'valorSegurado', 'numeroContratoEmprestimo','fimContratoEmprestimo','dataNascimento','produtoEscolhido','valorTotalPremio'];
  tableSimulacao:SimulacaoRetorno[];
  constructor(public simulacaoService:SimulacaoService) { }

  ngOnInit(): void {
    this.loadDados();
  }

  loadDados(){
    this.simulacaoService.getSimulacao().pipe(take(1)).subscribe(
      (r:Retorno)=>{
        this.tableSimulacao=r.data;
        console.log(this.tableSimulacao);
      },e=>{
        console.log(e);
      }
      );
    }


}
