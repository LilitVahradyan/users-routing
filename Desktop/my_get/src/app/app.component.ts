import { Component, OnInit } from '@angular/core';

import { UserService } from './core/services/user.service';
import { UserModel } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: Array<UserModel> = [];
  public user: UserModel;
  
  constructor(private userService: UserService) { }
  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe((data) => {
        this.users = data;
      }, (err) => {
        console.log(err);

      }, () => { });
  
  public getuserId(id:number) {
    this.userService.getUserById(id)
      .subscribe((data) => {
        this.user = data;
        console.log(data);
      }, (err) => {
        console.log(err);
      }, () => { });
  }
  
}


