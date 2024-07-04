import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDataComponent } from './all-data/all-data.component';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUserComponent,
    AllDataComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
  ]
})
export class CrudModule { }
