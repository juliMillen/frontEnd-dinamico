import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  // esto es para traer un array de datos

   estudios:any;    // instanciando variable
  constructor(private datosEducacion:DatosService) { }

  ngOnInit(): void {
    this.datosEducacion.getDatos().subscribe(data =>{
      this.estudios= data.estudios;
    })

    AOS.init();
  }

}
