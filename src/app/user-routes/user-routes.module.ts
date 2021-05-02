import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { UsersComponent } from '../components/users/users.component';

 
const routes:Routes = [
 {path: "", redirectTo: "/users", pathMatch: 'full'},
 {path: "users", component: UsersComponent},
 {path: "users/:id", component: ProfileComponent },
 {path: "**", component: NotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutesModule { }
