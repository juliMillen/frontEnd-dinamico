import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../entidades/persona';

@Component({
  selector: 'app-modal-sobre-mi',
  templateUrl: './modal-sobre-mi.component.html',
  styleUrls: ['./modal-sobre-mi.component.css']
})
export class ModalSobreMiComponent implements OnInit {
  form:FormGroup;
  personas: Persona[]=[];
  constructor(private sPersona:PersonaService, private formBuilder:FormBuilder) { 
    this.form= this.formBuilder.group({
      id: [''],
      nombre: ['',[Validators.required]],
      apellido: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      descripcion:['',[Validators.required]],
      urlFoto: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.CargarPersona();
  }

  public CargarPersona():void{
    this.sPersona.list().subscribe(data=>(this.personas=data));
  }

  cargarDetail(id: number) {
    this.sPersona.detail(id).subscribe(
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
   //solo para pruebas en el local
  guardar() {
    console.log("esta funcionando!")
    let per = this.form.value;
    console.log()

    if (per.id == '') {
      this.sPersona.create(per).subscribe(
        data => {
          alert("Su nueva PERSONA con ACCESO a la edición fue añadida correctamente");
          this.CargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.sPersona.update(per).subscribe(
        data => {
          alert("Persona editada!");
          this.CargarPersona();
          this.form.reset();
        }
      )
    }
  }
  public EliminarPersona(id?:number){
    if(id != undefined){
      this.sPersona.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarPersona();
      }, error=>{
        alert("no se ha podido eliminar a la persona");
      })
    }

  }


  

}
