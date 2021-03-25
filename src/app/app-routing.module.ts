import { PedidoDetailsComponent } from './pedido-details/pedido-details.component';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { UpdatePedidoComponent } from './update-pedido/update-pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedido', pathMatch: 'full' },
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'add', component: CreatePedidoComponent },
  { path: 'update/:id', component: UpdatePedidoComponent },
  { path: 'details/:id', component: PedidoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
