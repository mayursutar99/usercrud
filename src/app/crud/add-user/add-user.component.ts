import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  statesData!:any;
  AllData!:any;
  cityData!:any;
  addUserFormGroup!:FormGroup;
  constructor(private userService: UserService,
    private router: Router){
  }
  ngOnInit(): void {
    this.getAllStates();
    this.addUserFormGroup = new FormGroup({
      name: new FormControl<string>(''),
      age: new FormControl<number>(0),
      address: new FormControl<string>(''),
      states: new FormControl<string>(''),
      city: new FormControl<string>(''),
    });
    this.addUserFormGroup.get('states')?.valueChanges.subscribe((state: string) => {
      this.cityData = this.AllData.filter((data: { state: any; }) => data.state === state);
    });
  }
  userMain: userType={name: '', age:0, address:'',states:'',city:''};
  onSubmit(){
    this.userMain=this.addUserFormGroup.value;
    
    // this.userMain.name=user.value.name;
    // this.userMain.age=user.value.age;
    // this.userMain.address=user.value.address;
    this.userService.addUser(this.userMain).subscribe((response)=>{
      this.router.navigateByUrl('getAll');
    });
  }
  getAllStates(){
    return this.userService.getAllIndianStatesAndCities().subscribe((response)=>{
      this.statesData=response;
      this.AllData=response;
      this.statesData = new Set(this.statesData.map((states: { state: any; }) => states.state));
    })
  }
}
