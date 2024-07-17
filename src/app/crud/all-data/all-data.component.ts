import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss']
})
export class AllDataComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;
  dataSource = new MatTableDataSource<userType>();
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'state', 'city','action'];
  isEditOn:Boolean = false;
  user!:userType;
  constructor(private userService:UserService){}
  ngOnInit(){
    this.loadAllData();
  }
  loadAllData(){
    this.userService.getAllUsers().subscribe(users =>{
      this.dataSource.data=users;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sorting;
    })
  }
  startEdit(element:userType){
    this.user = {...element};
    this.isEditOn = true;
  }
  cancel(){
    this.isEditOn = false;
    this.loadAllData();
  }
  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadAllData();
    });
  }
  filterChnage(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue;

  }
}
