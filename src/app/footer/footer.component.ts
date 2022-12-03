import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:any;
  constructor( private datosFooter:DatosService) { }

  ngOnInit(): void {
    this.datosFooter.getDatos().subscribe(data =>{
      this.footer= data.footer;
  })
}
}
