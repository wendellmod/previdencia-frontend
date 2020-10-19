import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './paginas/tela-inicial/tela-inicial.component';
import { CadastroEnderecoComponent } from './paginas/cadastro-endereco/cadastro-endereco.component';
import { CadastroParticipanteComponent } from './paginas/cadastro-participante/cadastro-participante.component';
import { UnicoParticipanteComponent } from './paginas/unico-participante/unico-participante.component';
import { AlterarParticipanteComponent } from './paginas/alterar-participante/alterar-participante.component';
import { UnicoEnderecoComponent } from './paginas/unico-endereco/unico-endereco.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';


const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'participante/cadastrar', component: CadastroParticipanteComponent },
  { path: 'participante/:cpf', component: UnicoParticipanteComponent},
  { path: 'participante/alterar/:cpf', component: AlterarParticipanteComponent },
  { path: 'participante/endereco/:cpf', component: UnicoEnderecoComponent },
  { path: 'participante/endereco/cadastrar/:cpf', component: CadastroEnderecoComponent },
  { path: 'participante/endereco/alterar/:cpf', component: CadastroEnderecoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
