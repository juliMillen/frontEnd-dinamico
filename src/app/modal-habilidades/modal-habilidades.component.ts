import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from '../entidades/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';


@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
form:FormGroup;
habilidades: Habilidad[]=[];


  constructor( private sHabilidad:HabilidadService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0),Validators.max(100)]],
      color:['',Validators.required]
    })
  }
  

  ngOnInit(): void {
    this.CargarHabilidad();
    this.form.reset();
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Porcentaje(){
    return this.form.get('porcentaje');
  }

  get Color(){
    return this.form.get('color');
  }

  get NombreInValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get PorcentajeInValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  get ColorInValid(){
    return this.Color?.touched && !this.Color.valid;
  }

  get NombreValid(){
    return this.Nombre?.valid;
  }

  get PorcentajeValid(){
    return this.Porcentaje?.valid;
  }

  get ColorValid(){
    return this.Color?.valid;
  }


  CargarHabilidad(): void {
    this.sHabilidad.list().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }

  cargarDetail(id?: number) {
    this.sHabilidad.detail(id).subscribe(
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
    console.log("FUNCIONA!!")
    let hab = this.form.value;
    console.log()

    if (hab.id == '') {
      this.sHabilidad.create(hab).subscribe(
        data => {
          alert("Su nueva habilidad fue añadida correctamente");
          this.CargarHabilidad();
          this.form.reset();
        }
      )
    } else {
      this.sHabilidad.update(hab).subscribe(
        data => {
          alert("Habilidad editada!!");
          this.CargarHabilidad();
          this.form.reset();
        }
      )
    }
  }

 

  public EliminarHabilidad(id?:number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarHabilidad();
      }, error=>{
        alert("no se ha podido eliminar la educacion");
      })
    }

  }


}
