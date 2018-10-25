import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/services/users.service';
import { AlbumModel } from '../../core/models/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  public photosId: number;
  public photoAlbum: Array<AlbumModel> = [];
  
  constructor(private activeRoute: ActivatedRoute,
  	          private usersService: UsersService) {
  	this.photosId = this.activeRoute.snapshot.params['id'];
    console.log(this.activeRoute.snapshot.params['id']);
  }

  ngOnInit() {
  	this.usersService.getPhotosById(this.photosId)
  		.subscribe((data:Array<AlbumModel>)=>{
  			this.photoAlbum = data;
  			console.log(data);
  		},(err)=>{
  			console.log(err);

  		})
  }

}












