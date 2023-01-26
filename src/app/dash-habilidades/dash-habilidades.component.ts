import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../servicios/habilidad.service';
import { Habilidad } from '../entidades/habilidad';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-dash-habilidades',
  templateUrl: './dash-habilidades.component.html',
  styleUrls: ['./dash-habilidades.component.css']
})
export class DashHabilidadesComponent implements OnInit {
  isLogged=false;
  habilidades: Habilidad[]=[];            // llamamos a la entidad que es un array

  constructor(private shabilidades:HabilidadService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.CargarNuevaHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  public CargarNuevaHabilidad():void{
    this.shabilidades.list().subscribe(data=>(this.habilidades=data));
  }


  public EliminarHabilidad(id?:number){
    if(id != undefined){
      this.shabilidades.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarNuevaHabilidad();
      }, error=>{
        alert("no se ha podido eliminar la habilidad");
      })
    }

  }

  public ActualizarH(habilidad:Habilidad){
    this.shabilidades.update(habilidad);
  }

}
