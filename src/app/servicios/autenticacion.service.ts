import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../entidades/nuevo-usuario';
import { LoginUsuario } from '../entidades/login-usuario';
import { JwtDto } from '../entidades/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl="http://localhost:8080/auth/";

  constructor( private httpClient:HttpClient) {
   }

   public NuevoUsuario(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
   }

   public LoginUsuario(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
   }

 
}
