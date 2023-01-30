import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redsocial } from '../entidades/redsocial';
import { RedService } from '../servicios/red.service';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  form:FormGroup;
  redes: Redsocial[]=[];

  constructor(private formBuilder:FormBuilder, private sRedes:RedService) { 
    this.form= this.formBuilder.group({
      id:[''],
      iconoR: ['', Validators.required],
      url: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.CargarRed();
    this.form.reset();
  }

  CargarRed(): void {
    this.sRedes.list().subscribe(
      data => {
        this.redes = data;
      }
    )
  }

  cargarDetail(id?: number) {
    this.sRedes.detail(id).subscribe(
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
    console.log("FUNCIONA!")
    let red = this.form.value;
    console.log()

    if (red.id == '') {
      this.sRedes.create(red).subscribe(
        data => {
          alert("Su nueva RED fue añadida correctamente");
          this.CargarRed();
          this.form.reset();
        }
      )
    } else {
      this.sRedes.update(red).subscribe(
        data => {
          alert("RED editada!");
          this.CargarRed();
          this.form.reset();
        }
      )
    }
  }

  public EliminarRed(id?:number){
    if(id != undefined){
      this.sRedes.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarRed();
      }, error=>{
        alert("no se ha podido eliminar la red social");
      })
    }

  }

}
