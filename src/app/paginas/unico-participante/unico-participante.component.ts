import { Component, ViewChild } from '@angular/core';
import { Participante } from '../../interfaces/participante';
import { ParticipanteService } from '../../services/participante.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unico-participante',
  templateUrl: './unico-participante.component.html',
  styleUrls: ['./unico-participante.component.css']
})
export class UnicoParticipanteComponent {

  public participante: Participante;
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

}
