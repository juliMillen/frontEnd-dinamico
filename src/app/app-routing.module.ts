import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent } ,
  { path:'',redirectTo:'/inicio',pathMatch:'full' },
  { path:'**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


