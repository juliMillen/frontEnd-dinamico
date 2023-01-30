import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "http://localhost:8080/experiencia/";

  constructor( private httpClient:HttpClient) { }

  
  public list():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'ver');
  }

  public detail(id?:number):Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `lista/${id}`);
  }

  public create(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }

  public update(experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/`, experiencia);

  }
}
