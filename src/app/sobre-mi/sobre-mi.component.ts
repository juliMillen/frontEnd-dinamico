import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
   sobreMi:any;
  constructor(private datosSobreMi:DatosService) { }

  ngOnInit(): void {
    this.datosSobreMi.getDatos().subscribe(data =>{
      this.sobreMi= data.sobreMi;
    })

    AOS.init();
  }

}
