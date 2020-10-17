import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Participante } from '../../interfaces/participante';

@Component({
  selector: 'app-form-input-participante',
  templateUrl: './form-input-participante.component.html',
  styleUrls: ['./form-input-participante.component.css']
})
export class FormInputParticipanteComponent {
  @Input() participante: Participante = [] as unknown as Participante;
  @Output() outputParticipante: EventEmitter<Participante> = new EventEmitter();

  onSubmit() {
    this.outputParticipante.emit(this.participante);
  }

}
