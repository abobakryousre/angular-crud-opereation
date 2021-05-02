import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      city: new FormControl(this.user.city, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      id: new FormControl(this.user.id),
    })
  }
  OnChanges(){
    console.log("ngOnChnge",this.user);
    
  }
  @Input() user:User = {id:0, name:"", email:"", city: ""};
  @Input() buttonTitle:string = "Add New User";
  @Input() buttonClass:string = "btn btn-primary mt-3";

  userForm:any;

  @Output() addNewUser:EventEmitter<User> = new EventEmitter();
  @Output() editUser:EventEmitter<User> = new EventEmitter();
  emmitUser(){
    console.log(this.user);
    if(this.buttonTitle === "Add New User"){
      this.addNewUser.emit(this.userForm.value);
      this.userForm.reset();
    }else{
      this.editUser.emit(this.userForm.value);
      document.getElementById(`c${this.user.id}`)?.click();
    }
  }
}
