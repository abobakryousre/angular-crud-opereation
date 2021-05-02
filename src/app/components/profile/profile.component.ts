import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private myServices:UsersService) {
    this.id = this.route.snapshot.params.id;
    
   }
   id:number;
   user:any;
  ngOnInit(): void {
    this.myServices.getUserById(this.id).subscribe({
      next: (user) => {
        this.user = user as User;
      }
    });
  }


}
