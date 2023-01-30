import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from '../entidades/experiencia';
import { Validators } from '@angular/forms';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form:FormGroup;
  experiencia:Experiencia[]=[];

  constructor(private formBuilder:FormBuilder, private sExperiencia:ExperienciaService) {
    this.form=this.formBuilder.group({
      id:[''],
      logo:[''],
      institucion: ['',[Validators.required]],
      nombre:['',[Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFinalizacion: ['']
   })
  }

  ngOnInit(): void {
    this.CargarExperiencia();
    this.form.reset();
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

  CargarExperiencia(): void {
    this.sExperiencia.list().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }

  cargarDetail(id?: number) {
    this.sExperiencia.detail(id).subscribe(
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
    let exp = this.form.value;
    console.log()

    if (exp.id == '') {
      this.sExperiencia.create(exp).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.CargarExperiencia();
          this.form.reset();
        }
      )
    } else {
      this.sExperiencia.update(exp).subscribe(
        data => {
          alert("Experiencia editada!");
          this.CargarExperiencia();
          this.form.reset();
        }
      )
    }
  }

 

  public EliminarExperiencia(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarExperiencia();
        this.form.reset();
      }, error=>{
        alert("no se ha podido eliminar la experiencia");
        this.CargarExperiencia();
        this.form.reset();
      })
    }

  }

}
