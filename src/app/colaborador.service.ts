import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private baseUrl = 'http://localhost:4200/crudWeb/v2/colaboradores';


  constructor(private http: HttpClient) { }

  getColaborador(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createColaborador(colaborador: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, colaborador);
  }

  updateColaborador(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteColaborador(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getColaboradorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
