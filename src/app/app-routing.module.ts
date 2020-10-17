import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEnderecoComponent } from './paginas/cadastro-endereco/cadastro-endereco.component';
import { CadastroParticipanteComponent } from './paginas/cadastro-participante/cadastro-participante.component';
import { UnicoParticipanteComponent } from './paginas/unico-participante/unico-participante.component';


const routes: Routes = [
  //{ path: '', component: UnicoParticipanteComponent}
  //{ path: '', component: CadastroParticipanteComponent }
  { path: '', component: CadastroEnderecoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
