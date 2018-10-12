import { Component, OnInit, Input, Output, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, AfterViewInit {
  @Input()
  public userInformation:UserModel;
  
  @Output() 
  public userId = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
   
  }
  ngAfterViewInit() { }
  
  public getUserId(id){
    this.userId.emit(id);
   }
}








