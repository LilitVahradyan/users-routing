import { Component, OnInit, Input } from '@angular/core';
import { UserCardModel } from '../../../core/models/user-card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  @Input()
  public userData: Array<UserCardModel>; 
  constructor() { }

  public users:Array<UserCardModel> 

  ngOnInit() {
  }
  
  public findUserByName(event){ 
                     
  let searchText = event.target.value.toLowerCase();

	searchText = searchText.toString().toLowerCase().trim();
  
    if(searchText.length > 0){
    	 this.users = this.userData.filter(function(item){  
    		return (item.name +" " + item.surname).toLowerCase().indexOf(searchText) !== -1;
    	

    	})
    }else{
      this.users = []; 
    }
}



}
