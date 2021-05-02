import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:{id:number, name:string, email:string, city:string}[] = [{id:1, name:"abobark", email:"abobakr@gmail.com" , city:"cairo"}]
  userForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })

  addUser(){
    console.log(this.userForm.value);
  }

}