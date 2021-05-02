import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
   }
   id:string ='';
  ngOnInit(): void {
  }

}
