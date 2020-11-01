import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSimulacaoComponent } from './lista-simulacao/lista-simulacao.component';
import { SimulacaoComponent } from './simulacao/simulacao.component';

const appRouter: Routes = [
  {path: '', component: SimulacaoComponent},
  {path: 'simulacao', component: SimulacaoComponent},
  {path: 'list', component: ListaSimulacaoComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
