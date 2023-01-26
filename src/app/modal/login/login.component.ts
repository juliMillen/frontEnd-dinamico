import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { LoginUsuario } from 'src/app/entidades/login-usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  form: FormGroup;
  isLogged = false;
  isLoginFail=false;
  loginUsuario!: LoginUsuario; //signo de exclamacion cuando no esta inicializado pero sabemos que despues lo vamos a inicializar
  nombreUsuario!: string;
  password!: string;
  roles: String[]=[];
  errorMsj!: string;

  //inyectar en el constructor el formBuilder

  constructor(private tokenService:TokenService,private authService:AutenticacionService, private formBuilder:FormBuilder, private ruta:Router) { 
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles= this.tokenService.getAuthorities();
    }
  }

  OnLogin():void{
    this.loginUsuario= new LoginUsuario(this.nombreUsuario,this.password); 
    this.authService.LoginUsuario(this.loginUsuario).subscribe(data =>{
        this.isLogged= true;
        this.isLoginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles= data.authorities;
        this.ruta.navigate(['dashboard'])
      }, err=>{
        this.isLogged=false;
        this.isLoginFail=true;
        this.errorMsj= err.error.mensaje;
        console.log(this.errorMsj);
      })
  }

  //metodos para el formulario
  //toma el dato del password
  get Password(){
    return this.form.get("password");
  }
   //toma el dato del email
  get Email(){
    return this.form.get("email");
  }

  //metodos de validacion del password
  get PasswordInValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  
  get PasswordValid(){
    return this.Password?.valid;
  }

  //metodo de validacion del email

  get EmailInValid(){
    return this.Email?.touched && !this.Email?.valid;
  }

  get EmailValid(){
    return this.Email?.valid;
  }


 /* onEnviar(event:Event){
     //detenemos el comportamiento del submit de un form
     event.preventDefault;
     this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("Data: "+ JSON.stringify(data));
      this.ruta.navigate(['/dashboard']);
     })

     if(this.form.valid){
      //llamamos a nuestro servicio para enviar los datos al servidor, tambien se podria ejecutar una logica extra
      alert("Todo salio bien ¡Enviar Formulario!")
     }
     else{
      //corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
      this.form.markAllAsTouched();
      alert("Ouch! Algo ha salido mal con el formulario")
     }
  } */
}
