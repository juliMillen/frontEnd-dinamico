import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from '../entidades/educacion';
import { EducacionService } from '../servicios/educacion.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-dash-educacion',
  templateUrl: './dash-educacion.component.html',
  styleUrls: ['./dash-educacion.component.css']
})
export class DashEducacionComponent implements OnInit {

  estudios:Educacion[]=[];
  
  constructor(private sEducacion:EducacionService, private tokenService: TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.sEducacion.list().subscribe(data =>{
      this.estudios= data;
  })
 }
}
