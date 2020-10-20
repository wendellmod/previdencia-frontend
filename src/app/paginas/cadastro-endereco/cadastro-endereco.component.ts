import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Endereco } from 'src/app/interfaces/endereco';
import { Participante } from 'src/app/interfaces/participante';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ParticipanteService } from 'src/app/services/participante.service';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent {
  public participante: Participante = {} as Participante;
  @ViewChild( ErrorMsgComponent, {static: true} ) errorMsgComponent: ErrorMsgComponent;

  constructor(private enderecoService: EnderecoService,
              private participanteService: ParticipanteService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.readParticipante(this.activateRoute.snapshot.params.cpf);
  }

  readParticipante(cpf: string) {
    this.participanteService.readParticipante(cpf)
      .subscribe((participante: Participante) => {
        console.log(participante);
        this.participante = participante;
      }, () => { this.errorMsgComponent.setError('Participante não encontrado'); });
  }

  createEndereco(endereco: Endereco, participante: Participante) {
    console.log(endereco);
    this.enderecoService.createEndereco(endereco, participante)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao tentar cadastrar endereço.'); }
      );
  }

}
