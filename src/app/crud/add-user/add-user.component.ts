import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private userService: UserService, private router: Router){

  }
  userMain: userType={name: '', age:0, address:'',};
  onSubmit(user:any){
    this.userMain.name=user.value.name;
    this.userMain.age=user.value.age;
    this.userMain.address=user.value.address;
    this.userService.addUser(this.userMain).subscribe((response)=>{
      this.router.navigateByUrl('getAll');
    });
  }
}
