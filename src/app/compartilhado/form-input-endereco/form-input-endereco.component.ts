import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-form-input-endereco',
  templateUrl: './form-input-endereco.component.html',
  styleUrls: ['./form-input-endereco.component.css']
})
export class FormInputEnderecoComponent {
  @Input() endereco: Endereco = {} as unknown as Endereco;
  @Output() outputEndereco: EventEmitter<Endereco> = new EventEmitter();

  constructor(private enderecoService: EnderecoService) {}

  onSubmit() {
    this.outputEndereco.emit(this.endereco);
  }

  getCep(cep: string, form: any) {
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      this.enderecoService.readEnderecoApiViaCep(cep)
        .subscribe(data => this.autoincrementa(data, form));
    }
  }

  autoincrementa(data: any, formulario: any) {
    formulario.form.patchValue({
      endereco: {
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      }
    });
  }

}
