import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../entidades/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  //inicializamos variables de instancia
  habilidades:Habilidad[]=[];


  constructor(private sHabilidades:HabilidadService) { }

  ngOnInit(): void {
    this.sHabilidades.list().subscribe(data =>{
       this.habilidades=data;
    })

  }

}
