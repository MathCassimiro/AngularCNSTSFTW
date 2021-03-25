import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador';

@Component({
  selector: 'app-create-colaborador',
  templateUrl: './create-colaborador.component.html',
  styleUrls: ['./create-colaborador.component.css']
})
export class CreateColaboradorComponent implements OnInit {
  colaborador: Colaborador = new Colaborador();
  submitted = false;

  constructor(private colaboradorService: ColaboradorService, private router: Router) { }

  ngOnInit() {
  }

  newColaborador(): void {
    this.submitted = false;
    this.colaborador = new Colaborador();
  }

  save() {
    this.colaboradorService
    .createColaborador(this.colaborador).subscribe(data => {
      console.log(data)
      this.colaborador = new Colaborador();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/colaboradores']);
  }

}