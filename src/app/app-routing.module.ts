import { PedidoDetailsComponent } from './pedido-details/pedido-details.component';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { UpdatePedidoComponent } from './update-pedido/update-pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedido', pathMatch: 'full' },
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'add', component: CreatePedidoComponent },
  { path: 'update/:id', component: UpdatePedidoComponent },
  { path: 'details/:id', component: PedidoDetailsComponent },
=======
import {ColaboradorDetailsComponent} from './colaborador-details/colaborador-details.component';
import {CreateColaboradorComponent} from './create-colaborador/create-colaborador.component';
import {ColaboradorListComponent} from './colaborador-list/colaborador-list.component';
import {UpdateColaboradorComponent} from './update-colaborador/update-colaborador.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', redirectTo: 'colaboradores', pathMatch: 'full'},
  {path: 'colaboradores', component: ColaboradorListComponent},
  {path: 'add', component: CreateColaboradorComponent},
  {path: 'update/:id', component: UpdateColaboradorComponent},
  {path: 'details/:id', component: ColaboradorDetailsComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
