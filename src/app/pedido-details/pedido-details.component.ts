import { Pedido } from '../pedido';
import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { PedidoListComponent } from '../pedido-list/pedido-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.css']
})
export class PedidoDetailsComponent implements OnInit {

  id: number;
  pedido: Pedido;

  constructor(private route: ActivatedRoute,private router: Router,
    private PedidoService: PedidoService) { }

  ngOnInit() {
    this.pedido = new Pedido();

    this.id = this.route.snapshot.params['id'];
    
    this.PedidoService.getPedido(this.id)
      .subscribe(data => {
        console.log(data)
        this.pedido = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['pedidos']);
  }
}
