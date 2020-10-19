import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { CadastroParticipanteComponent } from './paginas/cadastro-participante/cadastro-participante.component';
import { UnicoParticipanteComponent } from './paginas/unico-participante/unico-participante.component';
import { AlterarParticipanteComponent } from './paginas/alterar-participante/alterar-participante.component';
import { CadastroEnderecoComponent } from './paginas/cadastro-endereco/cadastro-endereco.component';
import { UnicoEnderecoComponent } from './paginas/unico-endereco/unico-endereco.component';
import { AlterarEnderecoComponent } from './paginas/alterar-endereco/alterar-endereco.component';
import { FormInputParticipanteComponent } from './compartilhado/form-input-participante/form-input-participante.component';
import { FormInputEnderecoComponent } from './compartilhado/form-input-endereco/form-input-endereco.component';
import { TelaInicialComponent } from './paginas/tela-inicial/tela-inicial.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    CadastroParticipanteComponent,
    UnicoParticipanteComponent,
    AlterarParticipanteComponent,
    CadastroEnderecoComponent,
    UnicoEnderecoComponent,
    AlterarEnderecoComponent,
    FormInputParticipanteComponent,
    FormInputEnderecoComponent,
    TelaInicialComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
