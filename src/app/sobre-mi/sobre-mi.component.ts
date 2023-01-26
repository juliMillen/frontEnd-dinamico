import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../entidades/persona';
import * as AOS from 'aos';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  personas: Persona []=[];
  constructor(private datosSobreMi:PersonaService) { }

  ngOnInit(): void {
    this.datosSobreMi.list().subscribe(info =>{
      this.personas = info;
    }),
    AOS.init()
  }
}
