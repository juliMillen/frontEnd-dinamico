import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from '../entidades/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form:FormGroup;
  proyecto:Proyecto[]=[];

  constructor(private formBuilder:FormBuilder, private sProyecto:ProyectoService) {
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })

   }

  ngOnInit(): void {
    this.CargarProyecto();
    this.form.reset();
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Descripcion(){
    return this.form.get('descripcion');
  }

  get NombreInValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get NombreValid(){
    return this.Nombre?.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.valid;
  }

  get DescripcionInValid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }

  CargarProyecto(): void {
    this.sProyecto.list().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  cargarDetail(id?: number) {
    this.sProyecto.detail(id).subscribe(
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
    let proyec = this.form.value;
    console.log()

    if (proyec.id == '') {
      this.sProyecto.create(proyec).subscribe(
        data => {
          alert("Su nuevo proyecto fue añadido correctamente");
          this.CargarProyecto();
          this.form.reset();
        }
      )
    } else {
      this.sProyecto.update(proyec).subscribe(
        data => {
          alert("Proyecto editado!");
          this.CargarProyecto();
          this.form.reset();
        }
      )
    }
  }

 

  public EliminarProyecto(id?:number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarProyecto();
        this.form.reset();
      }, error=>{
        alert("no se ha podido eliminar el proyecto");
        this.CargarProyecto();
        this.form.reset();
      })
    }

  }

}
