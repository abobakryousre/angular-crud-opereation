import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  users:{id:number, name:string, email:string, city:string}[] = [{id:1, name:"abobark", email:"abobakr@gmail.com" , city:"cairo"}]

  editUser(id:number){
  }
  deleteUser(id:number){

  }
  goToUser(id:number){
    this.router.navigate([`/users/${id}`])
  }
}
