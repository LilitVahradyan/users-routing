import { Component, OnInit } from '@angular/core';

import { UserService } from './core/services/user.service';
import { UserModel } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 public userData: Array<UserModel> = [];
 
  constructor(private userService: UserService){

  }
  
 ngOnInit(){
 
      this.userService.getUsers().subscribe((data) => {
        this.userData = data;
      }, (err) => {
        console.log(err);

      }, () => { });
 }
}




