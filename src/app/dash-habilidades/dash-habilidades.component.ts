import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dash-habilidades',
  templateUrl: './dash-habilidades.component.html',
  styleUrls: ['./dash-habilidades.component.css']
})
export class DashHabilidadesComponent implements OnInit {
  habilidades:any=[];

  constructor(private datosHabilidades:DatosService) { }

  ngOnInit(): void {
    this.datosHabilidades.getDatos().subscribe(data =>{
      this.habilidades=data.habilidades;
   })
  }

}
