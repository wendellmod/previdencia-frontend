import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEnderecoComponent } from './alterar-endereco.component';

describe('AlterarEnderecoComponent', () => {
  let component: AlterarEnderecoComponent;
  let fixture: ComponentFixture<AlterarEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
