import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) { }
  baseURL:string = "http://localhost:5000/users";
  getUsers(){
    return this.myClient.get(this.baseURL);
  }
  getUserById(id:number){
    return this.myClient.get(`${this.baseURL}/${id}`);
  }
  addUser(user:User){
    return this.myClient.post(this.baseURL, user);
  }
  deleteUser(id:number){
    return this.myClient.delete(`${this.baseURL}/${id}`);
  }
  editUser(user:User){
    return this.myClient.patch(this.baseURL, user)
  }
}
