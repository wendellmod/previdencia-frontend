import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoParticipanteComponent } from './unico-participante.component';

describe('UnicoParticipanteComponent', () => {
  let component: UnicoParticipanteComponent;
  let fixture: ComponentFixture<UnicoParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicoParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicoParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
