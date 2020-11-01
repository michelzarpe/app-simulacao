import { API_CONFIG } from 'src/app/config/api-config'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {SimulacaoInsert} from 'src/app/modal/simulacao-insert';
import {SimulacaoInsertRet} from 'src/app/modal/simulacao-insert-retorno';
import {Retorno} from 'src/app/modal/simulacao-retorno';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoService {

  constructor(private http: HttpClient ) { }

 getSimulacao():Observable<Retorno>{
    return this.http.get<Retorno>(`${API_CONFIG.baseUrl}/simulacao`);
 }


createSimulacao(obj: SimulacaoInsert){
  return this.http.post(`${API_CONFIG.baseUrl}/simulacao`, obj, {observe: "response"});
}

}
