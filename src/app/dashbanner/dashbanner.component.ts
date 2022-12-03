import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dashbanner',
  templateUrl: './dashbanner.component.html',
  styleUrls: ['./dashbanner.component.css']
})
export class DashbannerComponent implements OnInit {
  nombre: string='';
  apellido: string='';
  puesto: string='';
  banner: string='';
  presentacion: string='';

  constructor(private datosBanner:DatosService) { }

  ngOnInit(): void {
    this.datosBanner.getDatos().subscribe(data =>{
      this.banner= data.banner;
      this.apellido= data.apellido;
      this.nombre= data.nombre;
      this.puesto= data.puesto;
      this.presentacion= data.presentacion;
    })
  }

}
