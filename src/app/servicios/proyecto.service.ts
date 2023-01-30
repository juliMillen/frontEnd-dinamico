import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "http://localhost:8080/proyecto/";

  constructor( private httpClient:HttpClient) { }

  
  public list():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'list');
  }

  public detail(id?:number):Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + `detail/${id}`);
  }

  public create(proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`); 
  }

  public update(proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/`, proyecto);

  }
}

