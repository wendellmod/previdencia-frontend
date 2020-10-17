import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputParticipanteComponent } from './form-input-participante.component';

describe('FormInputParticipanteComponent', () => {
  let component: FormInputParticipanteComponent;
  let fixture: ComponentFixture<FormInputParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
