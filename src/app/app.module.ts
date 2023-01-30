import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modal/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ModalPresentacionComponent } from './modal-presentacion/modal-presentacion.component';
import { ModalFotoPerfilComponent } from './modal-foto-perfil/modal-foto-perfil.component';
import { ModalSobreMiComponent } from './modal-sobre-mi/modal-sobre-mi.component';
import { ModalEducacionComponent } from './modal-educacion/modal-educacion.component';
import { ModalHabilidadesComponent } from './modal-habilidades/modal-habilidades.component';
import { ModalRedesComponent } from './modal-redes/modal-redes.component';
import { DashbannerComponent } from './dashbanner/dashbanner.component';
import { DashSobreMiComponent } from './dash-sobre-mi/dash-sobre-mi.component';
import { DashEducacionComponent } from './dash-educacion/dash-educacion.component';
import { DashHabilidadesComponent } from './dash-habilidades/dash-habilidades.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InterceptorProvider } from './servicios/interceptor.service';
import { DatosService } from './servicios/datos.service';
import { DashExperienciaComponent } from './dash-experiencia/dash-experiencia.component';
import { DashProyectoComponent } from './dash-proyecto/dash-proyecto.component';
import { ModalExperienciaComponent } from './modal-experiencia/modal-experiencia.component';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    SobreMiComponent,
    ContactoComponent,
    EducacionComponent,
    HabilidadesComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    ModalDashboardComponent,
    InicioComponent,
    FooterComponent,
    ModalPresentacionComponent,
    ModalFotoPerfilComponent,
    ModalSobreMiComponent,
    ModalEducacionComponent,
    ModalHabilidadesComponent,
    ModalRedesComponent,
    DashbannerComponent,
    DashSobreMiComponent,
    DashEducacionComponent,
    DashHabilidadesComponent,
    PaginaErrorComponent,
    DashExperienciaComponent,
    DashProyectoComponent,
    ModalExperienciaComponent,
    ModalProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    DatosService,
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
