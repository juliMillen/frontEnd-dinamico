import { Component, OnInit } from '@angular/core';

import { Educacion } from '../entidades/educacion';
import * as AOS from 'aos';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  // esto es para traer un array de datos

  estudios:Educacion[]=[];  // instanciando variable
  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.list().subscribe(data =>{
      this.estudios= data;
    })

    AOS.init();
  }

}
