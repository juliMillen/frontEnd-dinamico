import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/educacion/";
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'list');
  }

  public detail(id:number):Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + `detail/${id}`);
  }

  public create(educacion:Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`); 
  }

  public update(educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/`, educacion);

  }
}
