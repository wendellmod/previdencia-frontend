import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../interfaces/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createParticipante(participante: Participante): Observable<Participante> {
    const url = `${environment.previdenciaApiUrl}/participantes`;
    return this.http.post<Participante>(url, participante, this.httpOptions);
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
