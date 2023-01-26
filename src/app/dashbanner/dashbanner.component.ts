import { Component, OnInit } from '@angular/core';
import { Banner } from '../entidades/banner';
import { PresentacionService } from '../servicios/presentacion.service';

@Component({
  selector: 'app-dashbanner',
  templateUrl: './dashbanner.component.html',
  styleUrls: ['./dashbanner.component.css']
})
export class DashbannerComponent implements OnInit {
  
  banner: Banner[]=[];


  constructor(private sPresentacion:PresentacionService) { }

  ngOnInit(): void {
    
  }

  public CargarNuevaPresentacion():void{
    this.sPresentacion.list().subscribe(data=>(
      this.banner=data
      ));
  }


  public EliminarPresentacion(id:number){
    if(id != undefined){
      this.sPresentacion.delete(id).subscribe(data=>{
        //alerta para que diga que se ha eliminado correctamente
        this.CargarNuevaPresentacion();
      }, error=>{
        alert("no se ha podido eliminar la presentacion");
      })
    }

  }

  public ActualizarH(banner:Banner){
    this.sPresentacion.update(banner);
  }

}
