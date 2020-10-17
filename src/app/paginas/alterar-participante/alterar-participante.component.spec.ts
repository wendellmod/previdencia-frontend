import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarParticipanteComponent } from './alterar-participante.component';

describe('AlterarParticipanteComponent', () => {
  let component: AlterarParticipanteComponent;
  let fixture: ComponentFixture<AlterarParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
