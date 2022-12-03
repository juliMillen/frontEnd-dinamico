import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  //inicializamos variables de instancia
  habilidades:any=[];

  constructor(private datosHabilidades:DatosService) { }

  ngOnInit(): void {
    this.datosHabilidades.getDatos().subscribe(data =>{
       this.habilidades=data.habilidades;
    })

    AOS.init();
  }

}
