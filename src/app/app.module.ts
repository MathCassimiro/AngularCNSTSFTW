import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { PedidoDetailsComponent } from './pedido-details/pedido-details.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { UpdatePedidoComponent } from './update-pedido/update-pedido.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateColaboradorComponent } from './create-colaborador/create-colaborador.component';
import { ColaboradorDetailsComponent } from './colaborador-details/colaborador-details.component';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { UpdateColaboradorComponent } from './update-colaborador/update-colaborador.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePedidoComponent,
    PedidoDetailsComponent,
    PedidoListComponent,
    UpdatePedidoComponent,
    CreateColaboradorComponent,
    ColaboradorDetailsComponent,
    ColaboradorListComponent,
    UpdateColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }