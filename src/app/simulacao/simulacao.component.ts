import { Component, OnInit } from '@angular/core';
import {SimulacaoService} from 'src/app/service/simulacao.service';
import { take } from 'rxjs/operators';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { SimulacaoInsert } from '../modal/simulacao-insert';
import {SimulacaoRet} from '../modal/simulacao-insert-retorno';
import {RetornoError} from '../modal/retorno-error';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent implements OnInit {
  validador:boolean=false;
  error:String;
  resultadoPost:boolean=false;
  valorTotalPremio:string;
  produtoEscolhido:string;
  formSimulacao: FormGroup;
  simulacaoInsertRet:SimulacaoRet;
  errorRetorno:RetornoError;
 
  constructor(public simulacaoService:SimulacaoService,public formBuilder: FormBuilder){
    this.validador=false;
    this.resultadoPost=false;
  }
  
  ngOnInit() {
    this.createForm();
  }

    createForm() {
      this.formSimulacao = this.formBuilder.group({
        nomePessoa: [null,Validators.required],
        cpf: [null,Validators.required],
        valorSegurado:[null,Validators.required],
        numeroContratoEmprestimo: [null,Validators.required],
        fimContratoEmprestimo: [null,Validators.required],
        dataNascimento: [null,Validators.required]
      })
    }
  
    onSubmit() {
      console.log("Validador"+this.formSimulacao.valid);
      if(this.formSimulacao.valid==false){
        this.validador=!this.formSimulacao.valid;
        this.error="Preencher todos os campos"
      }else{
        this.validador=!this.formSimulacao.valid;
        this.error="";

        let simulacaoInsert :SimulacaoInsert ={
        cpf:this.formSimulacao.value.cpf,
        dataNascimento:this.formSimulacao.value.dataNascimento,
        fimContratoEmprestimo:this.formSimulacao.value.fimContratoEmprestimo,
        nomePessoa:this.formSimulacao.value.nomePessoa,
        numeroContratoEmprestimo:this.formSimulacao.value.numeroContratoEmprestimo,
        valorSegurado:this.formSimulacao.value.valorSegurado}

        simulacaoInsert.dataNascimento = `${simulacaoInsert.dataNascimento.split('-')[2]}/${simulacaoInsert.dataNascimento.split('-')[1]}/${simulacaoInsert.dataNascimento.split('-')[0]}`
        simulacaoInsert.fimContratoEmprestimo = `${simulacaoInsert.fimContratoEmprestimo.split('-')[2]}/${simulacaoInsert.fimContratoEmprestimo.split('-')[1]}/${simulacaoInsert.fimContratoEmprestimo.split('-')[0]}`

  
        this.simulacaoService.createSimulacao(simulacaoInsert).pipe(take(1)).subscribe(
          (r:any)=>{
            this.simulacaoInsertRet=r.body.data;
              console.log(this.simulacaoInsertRet);
              this.resultadoPost=true;
              this.valorTotalPremio=`R$ ${this.simulacaoInsertRet.valorTotalPremio}`;
              this.produtoEscolhido=this.simulacaoInsertRet.produtoEscolhido;
          },
          err => {
            this.errorRetorno = err.error;
            this.validador=true;

            if(this.errorRetorno.status==404){
              this.error=this.errorRetorno.message;
            }else if(this.errorRetorno.status==422){
              this.errorRetorno.errors.forEach(element=>{
                this.error=this.error+"  "+element.messege;
              })
            }
          }
          );
         
      } 
    }

}
