import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule
  ]
})
export class EmployeeListModule { }
