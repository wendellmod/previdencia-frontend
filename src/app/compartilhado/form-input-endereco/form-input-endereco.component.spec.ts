import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputEnderecoComponent } from './form-input-endereco.component';

describe('FormInputEnderecoComponent', () => {
  let component: FormInputEnderecoComponent;
  let fixture: ComponentFixture<FormInputEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
