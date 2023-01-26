import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redsocial } from '../entidades/redsocial';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url:string="http://localhost:8080/red/";
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Redsocial[]>{
    return this.httpClient.get<Redsocial[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Redsocial[]>{
    return this.httpClient.get<Redsocial[]>(this.url + `ver/${id}`);
  }

  public create(redsocial:Redsocial):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', redsocial);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }

  public update(redsocial:Redsocial):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', redsocial);

  }
}
