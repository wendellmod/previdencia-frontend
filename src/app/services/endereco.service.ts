import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../interfaces/endereco';
import { Participante } from '../interfaces/participante';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  readEnderecoApiViaCep(cep: string) {
    const url = `${environment.viacepApiUrl}/ws/${cep}/json`;
    return this.http.get(url);
  }

  createEndereco(endereco: Endereco, participante: Participante): Observable<Endereco> {
    const url = `${environment.previdenciaApiUrl}/participantes/${participante.cpf}/enderecos`;
    return this.http.post<Endereco>(url, endereco);
  }

}
