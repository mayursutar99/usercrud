import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDataComponent } from './all-data/all-data.component';

const routes: Routes = [
  {path: '', component:AddUserComponent },
  {path: 'getAll', component:AllDataComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
