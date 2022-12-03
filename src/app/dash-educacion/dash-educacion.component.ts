import { Component, OnInit } from '@angular/core';
import { EducacionComponent } from '../educacion/educacion.component';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-dash-educacion',
  templateUrl: './dash-educacion.component.html',
  styleUrls: ['./dash-educacion.component.css']
})
export class DashEducacionComponent implements OnInit {

  estudios:any;
  constructor(private datosEducacion:DatosService) { }

  ngOnInit(): void {
    this.datosEducacion.getDatos().subscribe(data =>{
      this.estudios= data.estudios;
    })
  }

}
