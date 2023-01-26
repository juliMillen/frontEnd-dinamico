import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redes: any;
  usuarioAuth: boolean= false;

  constructor() { }

  ngOnInit(): void {
   
  }
}
