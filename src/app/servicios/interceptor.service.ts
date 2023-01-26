import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenService:TokenService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    let inReq=req;
    const token= this.tokenService.getToken();
    if(token != null){
      inReq= req.clone({
        headers:req.headers.set('authorization','Bearer'+token)
      });
    }
    return next.handle(inReq);
    }
    

    
  }

  export const InterceptorProvider= [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }];


