import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-list/employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:EmployeeComponent},
  {path:'employee',
loadChildren:()=>import('./employee-list/employee-list.module').then(m=>m.EmployeeListModule)},
{path:'form/:id', component:EmployeeFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
