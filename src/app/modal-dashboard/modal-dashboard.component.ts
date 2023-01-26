import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-dashboard',
  templateUrl: './modal-dashboard.component.html',
  styleUrls: ['./modal-dashboard.component.css']
})
export class ModalDashboardComponent implements OnInit {
isLogged=false;
  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  OnLogOut():void{
    this.tokenService.LogOut();
    window.location.reload();

  }

}
