import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string="http://localhost:8080/persona/";
  updatePersona:any;
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + `detail/${id}`);
  }

  public create(persona:Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', persona);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`); 
  }

  public update(persona:Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/$`, persona);

  }
}
