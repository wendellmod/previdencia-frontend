import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';
import { ViaCep } from 'src/app/interfaces/via-cep';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-form-input-endereco',
  templateUrl: './form-input-endereco.component.html',
  styleUrls: ['./form-input-endereco.component.css']
})
export class FormInputEnderecoComponent {
  @Input() endereco: Endereco = {} as Endereco;
  @Output() outputEndereco: EventEmitter<Endereco> = new EventEmitter();
  public viaCep: ViaCep = {} as ViaCep;

  constructor(private enderecoService: EnderecoService) {}

  onSubmit() {
    this.outputEndereco.emit(this.endereco);
  }

  getCep(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      this.enderecoService.readEnderecoApiViaCep(cep)
        .subscribe((viaCep: ViaCep) => {
          this.viaCep = viaCep;
          this.autoincrementa(this.viaCep, this.endereco);
        });
    }
  }

  autoincrementa(viaCep: ViaCep, endereco: Endereco) {
    endereco.cep = viaCep.cep;
    endereco.logradouro = viaCep.logradouro;
    endereco.bairro = viaCep.bairro;
    endereco.localidade = viaCep.localidade;
    endereco.uf = viaCep.uf;
  }

}
