import { Component, OnInit } from '@angular/core';
//importamos las librerias de formularios que vamos a necesitar
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //inyectar en el constructor el formBuilder

  constructor(private formBuilder:FormBuilder) { 
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
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


  onEnviar(event:Event){
     //detenemos el comportamiento del submit de un form
     event.preventDefault;

     if(this.form.valid){
      //llamamos a nuestro servicio para enviar los datos al servidor, tambien se podria ejecutar una logica extra
      alert("Todo salio bien ¡Enviar Formulario!")
     }
     else{
      //corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
      this.form.markAllAsTouched();
      alert("Ouch! Algo ha salido mal con el formulario")
     }
  }
}
