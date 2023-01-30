import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../entidades/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-dash-experiencia',
  templateUrl: './dash-experiencia.component.html',
  styleUrls: ['./dash-experiencia.component.css']
})
export class DashExperienciaComponent implements OnInit {
  isLogged=false;
  experiencia: Experiencia[]=[];            // llamamos a la entidad que es un array

  constructor(private sExperiencia: ExperienciaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.sExperiencia.list().subscribe(data =>{
      this.experiencia= data;
    })
 }
}
