import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParticipanteComponent } from './cadastro-participante.component';

describe('CadastroParticipanteComponent', () => {
  let component: CadastroParticipanteComponent;
  let fixture: ComponentFixture<CadastroParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
