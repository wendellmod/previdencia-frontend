import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Participante } from 'src/app/interfaces/participante';
import { ParticipanteService } from 'src/app/services/participante.service';

@Component({
  selector: 'app-alterar-participante',
  templateUrl: './alterar-participante.component.html',
  styleUrls: ['./alterar-participante.component.css']
})
export class AlterarParticipanteComponent {
  public participante: Participante = {} as Participante;
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private participanteService: ParticipanteService, private router: Router, private activateRoute: ActivatedRoute) {
    this.readParticipante(this.activateRoute.snapshot.params.cpf);
  }

  readParticipante(cpf: string) {
    this.participanteService.readParticipante(cpf)
      .subscribe((participante: Participante) => {
        this.participante = participante;
      }, () => { this.errorMsgComponent.setError('Participante não encontrado'); });
  }

  updateParticipante(participante: Participante) {
    this.participanteService.updateParticipante(participante)
      .subscribe(
        () => { this.router.navigateByUrl('/participante/:cpf'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete.'); });
  }

}
