import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//hacer peticiones y CRUD
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //http = alias
  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
  getDatos():Observable<any>{

    //retorno de datos utilizando el metodo get ed HttpClient que llama a la base de datos Json o a una URL
    return this.http.get('./assets/json/proyectoF.json');

    //aca se podria poner un callback para ver la opcion del problema de conexion del servidor
  }
}
