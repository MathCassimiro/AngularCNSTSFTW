import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Colaborador} from '../colaborador';
import {ColaboradorService} from '../colaborador.service';
import {ColaboradorListComponent} from '../colaborador-list/colaborador-list.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-colaborador-details',
  templateUrl: './colaborador-details.component.html',
  styleUrls: ['./colaborador-details.component.css']
})
export class ColaboradorDetailsComponent implements OnInit {

  codigo: number;
  colaborador: Colaborador;

  constructor(private route: ActivatedRoute, private router: Router, private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaborador = new Colaborador();

    this.codigo = this.route.snapshot.params['codigo'];
    
    this.colaboradorService.getColaborador(this.codigo)
      .subscribe(data => {
        console.log(data)
        this.colaborador = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['colaboradores']);
  }

}
