import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';


const routes:Routes = [
  {path: "", redirectTo: "/users", pathMatch: 'full'},
  {path: "users", component: UsersComponent},
  {path: "users/:id", component: ProfileComponent },
  {path: "**", component: NotFoundComponent },
 ];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    AddUserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
