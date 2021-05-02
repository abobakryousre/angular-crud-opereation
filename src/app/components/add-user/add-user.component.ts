import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  }
  userForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })

  @Output() addNewUser:EventEmitter<User> = new EventEmitter();
  addUser(){
    this.addNewUser.emit(this.userForm.value);
    this.userForm.reset();
  }
}
