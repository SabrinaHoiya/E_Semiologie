import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devis } from '../models/devis.model';



const baseUrl = 'https://az-platre.herokuapp.com/api/devis';


@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<Devis[]> {
    return this.http.get<Devis[]>(baseUrl);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  

}




 
