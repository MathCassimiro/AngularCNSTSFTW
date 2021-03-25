import { PedidoDetailsComponent } from '../pedido-details/pedido-details.component';
import { Observable } from "rxjs";
import { PedidoService } from "../pedido.service";
import { Pedido } from "../pedido";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  pedidos: Observable<Pedido[]>;

  constructor(private pedidoService: PedidoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pedidos = this.pedidoService.getPedidosList();
  }

  deletePedido(id: number) {
    this.pedidoService.deletePedido(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  pedidoDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePedido(id: number){
    this.router.navigate(['update', id]);
  }
}