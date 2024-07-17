import { state } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userType } from 'src/app/app.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  @Output() update=new EventEmitter();
  @Input() user!:userType;
  currentUser:userType={};
  updateUserFormGroup: any;
  statesData: any;
  AllData: any;
  cityData: any;
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.getAllStates();
    this.updateUserFormGroup = new FormGroup({
      name: new FormControl<string>(''),
      age: new FormControl<number>(0),
      address: new FormControl<string>(''),
      states: new FormControl<string>(''),
      city: new FormControl<string>(''),
    });
    
    if(this.user){
      // this.updateUserFormGroup.get('states')?.patchValue(this.user.states);
      this.patchFormValues();
      
    }
    this.updateUserFormGroup.get('states')?.valueChanges.subscribe((state: string) => {
      this.cityData = this.AllData.filter((data: { state: any; }) => data.state === state);
    });
  }
  patchFormValues(): void {
    this.updateUserFormGroup.patchValue({
      name: this.user.name,
      age: this.user.age,
      address: this.user.address,
      states: this.user.states,
      city: this.user.city
    });
  }
  getAllStates(){
    return this.userService.getAllIndianStatesAndCities().subscribe((response)=>{
      this.statesData=response;
      this.AllData=response;
      this.statesData = new Set(this.statesData.map((states: { state: any; }) => states.state));
      this.cityData = this.AllData.filter((data: { state: any; }) => data.state === this.user.states);

    })
  }
  onUpdate(){
    this.currentUser=this.updateUserFormGroup.value;
    this.userService.updateUser(this.user?.id,this.currentUser).subscribe((response)=>{
      this.update.emit();
    });
    
  }
  cancel(){
    this.update.emit();
  }
}
