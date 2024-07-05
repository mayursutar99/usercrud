import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDataComponent } from './all-data/all-data.component';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AddUserComponent,
    AllDataComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    MatTableModule,
  ]
})
export class CrudModule { }
