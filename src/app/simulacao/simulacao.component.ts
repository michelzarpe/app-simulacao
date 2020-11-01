import { Component, OnInit } from '@angular/core';
import {SimulacaoService} from 'src/app/service/simulacao.service';
import { take } from 'rxjs/operators';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent implements OnInit {

  formSimulacao: FormGroup;
 
  constructor(public simulacaoService:SimulacaoService,public formBuilder: FormBuilder){
  
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
      console.log(this.formSimulacao.value);
    }

}
