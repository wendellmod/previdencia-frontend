import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Endereco } from 'src/app/interfaces/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent {

  @ViewChild( ErrorMsgComponent, {static: true} ) errorMsgComponent: ErrorMsgComponent;

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  createEndereco(endereco: Endereco, cpf: string) {
    this.enderecoService.createEndereco(endereco, cpf)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao tentar cadastrar endereço.'); }
      );
  }

}
