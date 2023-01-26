import { Component, OnInit } from '@angular/core';
import { Persona } from '../entidades/persona';

import { PersonaService } from '../servicios/persona.service';


@Component({
  selector: 'app-dash-sobre-mi',
  templateUrl: './dash-sobre-mi.component.html',
  styleUrls: ['./dash-sobre-mi.component.css']
})
export class DashSobreMiComponent implements OnInit {
  persona:  Persona[]= [];
    constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {
    
    this.CargarNuevaPersona();
  }

  public CargarNuevaPersona():void{
    this.sPersona.list().subscribe(data=>(
     this.persona=data
    ))
  }

}
