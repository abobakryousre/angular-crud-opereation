import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private router:Router, private myServices:UsersService) { }
  subscribe:any;
  ngOnInit(): void {
    this.getAllUsers();

  }

  onDestroy(){
    this.subscribe.remove();
    console.log("Users Component Destroied");
  }
  search(event:any){
    if(!event.target.value) return this.getAllUsers()
    this.myServices.searchForUserByName(event.target.value).subscribe({
      next: (data) => {
        this.users =  data as User[];
      }
    })
  }
  users:User[] = []
  getAllUsers(){
    this.subscribe = this.myServices.getUsers().subscribe({
      next: (data) =>{
        this.users = data as User[];
      }
    });
  }
  addNewUser(user:User){
    this.myServices.addUser(user).subscribe({
      next: (data) => {
        // getting all users back after add new one to update the users state.
        this.users = data as User[]; 
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  editUser(user:User){
    this.myServices.editUser(user).subscribe({
      next: (data) => {
        this.users = data as User[];
      }
    })
  }
  deleteUser(id:number){
    this.myServices.deleteUser(id).subscribe({
      next: (data) =>{
        // getting all users back after add new one to update the users state.
        this.users = data as User[]; 
      }
    })
  }
  goToUser(id:number){
    this.router.navigate([`/users/${id}`])
  }
}
