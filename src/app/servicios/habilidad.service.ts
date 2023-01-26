import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url:string="http://localhost:8080/habilidad/";
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'list');
  }

  public detail(id:number):Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `lista/${id}`);
  }

  public create(habilidad:Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }

  public update(habilidad:Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', habilidad);

  }
}
