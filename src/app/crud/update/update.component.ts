import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  @Output() update=new EventEmitter();
  @Input() user!:userType;
  currentUser:userType={};
  constructor(private userService:UserService){

  }
  onUpdate(Form:any){
    this.currentUser.name=Form.value?.name;
    this.currentUser.age=Form.value?.age;
    this.currentUser.address=Form.value?.address;
    console.log(this.user.id);
    console.log(this.currentUser);
    this.userService.updateUser(this.user?.id,this.currentUser).subscribe();
    this.update.emit();
  }
  cancel(){
    this.update.emit();
  }
}
