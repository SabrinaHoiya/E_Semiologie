import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chantier } from '../models/chantier.model';

const baseUrl = 'https://az-platre.herokuapp.com/listChantie';

@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  constructor(private http: HttpClient) { }

  getListFiles(): Observable<Chantier[]> {
    return this.http.get<Chantier[]>(baseUrl);
  }

  getChantier(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }


  updateChantier(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
