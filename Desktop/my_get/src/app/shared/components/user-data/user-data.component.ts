import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input()
  public userList:UserModel;

  constructor() { }

  ngOnInit() {
  }

}








