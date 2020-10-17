import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-form-input-endereco',
  templateUrl: './form-input-endereco.component.html',
  styleUrls: ['./form-input-endereco.component.css']
})
export class FormInputEnderecoComponent {
  @Input() endereco: Endereco = [] as unknown as Endereco;
  @Output() outputEndereco: EventEmitter<Endereco> = new EventEmitter();

  constructor(private enderecoService: EnderecoService) {}

  onSubmit() {
    this.outputEndereco.emit(this.endereco);
  }

  getCep(cep, form) {
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      this.enderecoService.readEnderecoApiViaCep(cep)
      .subscribe(endereco => this.autoincrementa(endereco, form));
    }
  }

  autoincrementa(endereco, formulario) {
    formulario.form.patchValue({
      endereco: {
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        localidade: endereco.localidade,
        uf: endereco.uf
      }
    });
  }

}
