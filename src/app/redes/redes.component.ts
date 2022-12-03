import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes:any;
  constructor(private datosRedes:DatosService) { }

  ngOnInit(): void {
    this.datosRedes.getDatos().subscribe(data =>{
      this.redes= data.redes;
    })
  }

}
