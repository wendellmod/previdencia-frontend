import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { ParticipanteService } from '../../services/participante.service';
import { Router } from '@angular/router';
import { Participante } from '../../interfaces/participante';

@Component({
  selector: 'app-cadastro-participante',
  templateUrl: './cadastro-participante.component.html',
  styleUrls: ['./cadastro-participante.component.css']
})
export class CadastroParticipanteComponent {

  @ViewChild( ErrorMsgComponent, {static: true} ) errorMsgComponent: ErrorMsgComponent;

  constructor(private participanteService: ParticipanteService, private router: Router) { }

  createParticipante(participante: Participante) {
    this.participanteService.createParticipante(participante)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao tentar cadastrar participante.'); }
      );
  }

}
