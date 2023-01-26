import { Component, OnInit } from '@angular/core';
import { Redsocial } from '../entidades/redsocial';
import { RedService } from '../servicios/red.service';



@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes:Redsocial[]=[];
  constructor(private sRedes:RedService) { }

  ngOnInit(): void {
    this.sRedes.list().subscribe(data=>{
      this.redes= data;
  })
 }
}
