import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSimulacaoComponent } from './lista-simulacao.component';

describe('ListaSimulacaoComponent', () => {
  let component: ListaSimulacaoComponent;
  let fixture: ComponentFixture<ListaSimulacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSimulacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
