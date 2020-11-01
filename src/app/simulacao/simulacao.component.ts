import { Component, OnInit } from '@angular/core';
import {SimulacaoService} from 'src/app/service/simulacao.service';
import { take } from 'rxjs/operators';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { SimulacaoInsert } from '../modal/simulacao-insert';

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



        
        console.log("------------------")
        console.log(simulacaoInsert);  
        console.log("------------------")
        console.log(this.formSimulacao.value);
       /*
        this.simulacaoService.createSimulacao(simulacaoInsert).subscribe(
          (r)=>{
              console.log(r);
          },
          e=>{
            console.log(e);
          }
          );
         */ 
        this.resultadoPost=true;
        this.valorTotalPremio='234.2322';
        this.produtoEscolhido='produto1';
      } 
    }

}
