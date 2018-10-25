import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/services/users.service';
import { UserModel } from '../../core/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public usersData: Array<UserModel>;
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  	this.usersService.getUsers()
  		.subscribe((data)=>{
  			//console.log(data);
  			this.usersData = data;
  		},(err)=>{
  			console.log(err);
  		})

  }

}




