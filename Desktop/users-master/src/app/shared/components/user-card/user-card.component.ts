import { Component, OnInit, Input} from '@angular/core';
import { UserCardModel } from '../../../core/models/user-card.model';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  
  @Input()
  public userData: UserCardModel;
  constructor() { }
  
  ngOnInit() {
  }

 

}
