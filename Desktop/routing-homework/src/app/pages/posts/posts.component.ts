import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/services/users.service';
import { PostModel } from '../../core/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postId: number;
  public postList: Array<PostModel> = [];

  constructor(private activeRoute: ActivatedRoute,
  	          private usersService: UsersService) { 
  	this.postId = this.activeRoute.snapshot.params['id'];
  }
  
  ngOnInit() {
  	this.usersService.getPostById(this.postId)
  		.subscribe((data:Array<PostModel>)=>{
           this.postList = data;
           console.log(data);
  		},(err)=>{
  			console.log(err);
  		});
  }

}


