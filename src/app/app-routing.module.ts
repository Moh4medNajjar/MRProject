import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes = [
  {path:'', component: EmployeComponent},
  {path:'employe', component: EmployeComponent},
  {path:'demande', component: DemandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
