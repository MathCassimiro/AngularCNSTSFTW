import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { PedidoDetailsComponent } from './pedido-details/pedido-details.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePedidoComponent } from './update-pedido/update-pedido.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatePedidoComponent,
    PedidoDetailsComponent,
    PedidoListComponent,
    UpdatePedidoComponent
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