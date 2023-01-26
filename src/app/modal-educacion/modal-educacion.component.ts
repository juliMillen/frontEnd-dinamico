import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from '../entidades/educacion';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
form:FormGroup
estudios:Educacion[]=[];
  constructor(private formBuilder:FormBuilder, private sEducacion:EducacionService) 
  { 
    this.form=this.formBuilder.group({
      logo:[''],
      institucion: ['',[Validators.required]],
      nombre:['',[Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFinalizacion: ['']
    })

  }

  ngOnInit(): void {
    this.CargarEducacion();
  }

  get Logo(){
    return this.form.get('logo');
  }

  get Institucion(){
    return this.form.get('institucion');
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get FechaInicio(){
    return this.form.get('fechaInicio');
  }

  get FechaFinalizacion(){
    return this.form.get('fechaFinalizacion');
  }


  get LogoInValid(){
    return this.Logo?.touched && !this.Logo.valid;
  }

  get InstitucionInValid(){
    return this.Institucion?.touched && !this.Institucion.valid;
  }

  get NombreInValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get FechaInicioInValid(){
    return this.FechaInicio?.touched && !this.FechaInicio.valid;
  }

  get FechaFinalizacionInValid(){
    return this.FechaFinalizacion?.touched && !this.FechaFinalizacion.valid;
  }

  get LogoValid(){
    return this.Logo?.valid;
  }

  get InstitucionValid(){
    return this.Institucion?.valid;
  }

  get NombreValid(){
    return this.Nombre?.valid;
  }

  get FechaInicioValid(){
    return this.FechaInicio?.valid;
  }

  get FechaFinalizacionValid(){
    return this.FechaFinalizacion?.valid;
  }

  CargarEducacion(): void {
    this.sEducacion.list().subscribe(
      data => {
        this.estudios = data;
      }
    )
  }

  cargarDetalail(id: number) {
    this.sEducacion.detail(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  Update() {
    console.log("FUNCIONA!!!")
    let edu = this.form.value;
    console.log()

    if (edu.id == '') {
      this.sEducacion.create(edu).subscribe(
        data => {
          alert("Su nueva Educación fue añadida correctamente");
          this.CargarEducacion();
          this.form.reset();
        }
      )
    } else {
      this.sEducacion.update(edu).subscribe(
        data => {
          alert("Educación editada!!! UIHUUU!!!!");
          this.CargarEducacion();
          this.form.reset();
        }
      )
    }
  }

 

  public EliminarEducacion(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarEducacion();
      }, error=>{
        alert("no se ha podido eliminar la educacion");
      })
    }

  }

}
