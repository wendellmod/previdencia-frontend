import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoEnderecoComponent } from './unico-endereco.component';

describe('UnicoEnderecoComponent', () => {
  let component: UnicoEnderecoComponent;
  let fixture: ComponentFixture<UnicoEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicoEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
