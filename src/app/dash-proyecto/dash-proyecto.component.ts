import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../entidades/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-dash-proyecto',
  templateUrl: './dash-proyecto.component.html',
  styleUrls: ['./dash-proyecto.component.css']
})
export class DashProyectoComponent implements OnInit {
  proyecto:Proyecto[]=[];

  constructor(private sProyecto:ProyectoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.sProyecto.list().subscribe(data =>{
      this.proyecto= data;
   })
 }
}
