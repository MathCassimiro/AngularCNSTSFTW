import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador'
import { ColaboradorService } from '../colaborador.service';
import { Observable } from "rxjs";
import { ColaboradorDetailsComponent } from '../colaborador-details/colaborador-details.component';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {
  Colaborador: Observable<Colaborador[]>;

  constructor(private ColaboradorService: ColaboradorService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.Colaborador = this.ColaboradorService.getColaboradorList();
  }

  deleteColaborador(id: number) {
    this.ColaboradorService.deleteColaborador(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  colaboradorDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateColaborador(id: number){
    this.router.navigate(['update', id]);
  }

}
 