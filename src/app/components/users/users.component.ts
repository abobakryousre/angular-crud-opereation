import { Component, OnInit } from '@angular/core';

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

  editUser(id:number){
  }
  deleteUser(id:number){

  }
}
