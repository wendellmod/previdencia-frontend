import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../interfaces/endereco';
import { ViaCepEndereco } from '../interfaces/via-cep-endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  readEnderecoApiViaCep(cep: string) {
    const url = `${environment.viacepApiUrl}/ws/${cep}/json`;
    return this.http.get(url);
  }

  createEndereco(endereco: Endereco, cpf: string): Observable<Endereco> {
    const url = `${environment.previdenciaApiUrl}/participantes/${cpf}/enderecos`;
    return this.http.post<Endereco>(url, endereco);
  }

}
