import { Component, OnInit } from '@angular/core';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss']
})
export class AllDataComponent implements OnInit {
  dataSource: userType[]=[];
  displayedColumns: string[] = ['id', 'name', 'age', 'address'];
  constructor(private userService:UserService){}
  ngOnInit(){
    this.loadAllData();
  }
  loadAllData(){
    this.userService.getAllUsers().subscribe(users =>{
      this.dataSource=users;
    })
  }
}
