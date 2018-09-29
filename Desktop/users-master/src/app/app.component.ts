import { Component, Input } from '@angular/core';
import {UserCardModel} from './core/models/user-card.model';
import {users} from './data/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  public userData: UserCardModel;
 public userList: Array<UserCardModel>;

 constructor() {
    this.userList = users;
    console.log(this.userList);
  }
}
