import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../interfaces/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http: HttpClient) { }

  createParticipante(participante: Participante): Observable<Participante> {
    const url = `${environment.previdenciaApiUrl}/participantes`;
    return this.http.post<Participante>(url, participante);
  }

  readParticipante(cpf: string): Observable<Participante> {
    const url = `${environment.previdenciaApiUrl}/participantes/${cpf}`;
    return this.http.get<Participante>(url);
  }

  updateParticipante(participante: Participante): Observable<Participante> {
    const url = `${environment.previdenciaApiUrl}/participantes/${participante.cpf}`;
    return this.http.put<Participante>(url, participante);
  }

}
