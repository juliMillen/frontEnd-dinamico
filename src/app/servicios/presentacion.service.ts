import { Injectable } from '@angular/core';
import { Banner } from '../entidades/banner';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  url:string="http://localhost:8080/presentacion/";
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + 'lista');
  }


  public create(banner:Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', banner);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`); 
  }

  public update(banner:Banner):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', banner);

  }
}
