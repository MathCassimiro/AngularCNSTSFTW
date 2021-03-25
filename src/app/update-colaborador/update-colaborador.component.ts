import { Component, OnInit } from '@angular/core';
import {Colaborador} from '../colaborador';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import {Usuario} from '../usuario';
import {Endereco} from '../endereco';
import { from } from 'rxjs';


@Component({
  selector: 'app-update-colaborador',
  templateUrl: './update-colaborador.component.html',
  styleUrls: ['./update-colaborador.component.css']
})
export class UpdateColaboradorComponent implements OnInit {

  colaborador: Colaborador;
  codigo:number;

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

  updateColaborador() {
    this.colaboradorService.updateColaborador(this.codigo, this.colaborador)
      .subscribe(data => {
        console.log(data);
        this.colaborador = new Colaborador();
        this.gotoList();
      }, error => console.log(error));

      }
      
      onSubmit() {
        this.updateColaborador();    
      }

      gotoList() {
        this.router.navigate(['/colaboradores']);
      }

}






 

  


