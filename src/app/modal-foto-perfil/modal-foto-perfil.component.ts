import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../entidades/persona';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-modal-foto-perfil',
  templateUrl: './modal-foto-perfil.component.html',
  styleUrls: ['./modal-foto-perfil.component.css']
})
export class ModalFotoPerfilComponent implements OnInit {
  form:FormGroup;
  urlFoto: string="";
  nombre: string="";
  apellido: string="";
  profesion: string="";
  descripcion: string="";
  constructor(private formBuilder:FormBuilder, private sPersona:PersonaService) { 
    this.form=this.formBuilder.group({
      urlFoto:['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellido:['',[Validators.required]],
      profesion: ['']
    })
  }

  ngOnInit(): void {
  }


  get UrlFoto(){
    return this.form.get('urlFoto');
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Apellido(){
    return this.form.get('apellido');
  }

  get Profesion(){
    return this.form.get('profesion');
  }

  get UrlFotoInValid(){
    return this.UrlFoto?.touched && !this.UrlFoto.valid;
  }

  get NombreInValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get ApellidoInValid(){
    return this.Apellido?.touched && !this.Apellido.valid;
  }

  get ProfesionInValid(){
    return this.Profesion?.touched && !this.Profesion.valid;
  }

  get UrlFotoValid(){
    return this.UrlFoto?.valid;
  }

  get NombreValid(){
    return this.Nombre?.valid;
  }

  get ApellidoValid(){
    return this.Apellido?.valid;
  }

  get PasswordValid(){
    return this.Profesion?.valid;
  }

  onCreate():void{
    const per= new Persona(this.nombre,this.apellido, this.profesion, this.urlFoto, this.descripcion);
    this.sPersona.create(per).subscribe(data=>{
      alert("cambios aregados correctamente"); window.location.reload();
    });
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }
    else{
      alert("algo ha fallado con la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
