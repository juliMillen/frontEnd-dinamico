import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dash-sobre-mi',
  templateUrl: './dash-sobre-mi.component.html',
  styleUrls: ['./dash-sobre-mi.component.css']
})
export class DashSobreMiComponent implements OnInit {
  sobreMi:any;
  constructor(private datosSobreMi:DatosService) { }

  ngOnInit(): void {
    this.datosSobreMi.getDatos().subscribe(data =>{
      this.sobreMi= data.sobreMi;
    })
  }

}
