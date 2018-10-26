import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { UserModel } from '../../core/models/users.model';
import { AlbumModel } from '../../core/models/photos.model';
import { PostModel } from '../../core/models/post.model';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>(`${environment.backendEndPoint}users.json`);
  }
  
  public getPhotosById(id): Observable<Array<AlbumModel>>{
    return this.http.get<Array<AlbumModel>>(`${environment.backendEndPoint}photos.json`).pipe(
          map(items => {
            return items.filter(data =>           
             data.albumId === id);
          }, error => error)
        );
    
  }

  public getPostById(id): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>(`${environment.backendEndPoint}post.json`).pipe(
          map(items => {
            return items.filter(data =>           
             data.userId === id);
          }, error => error)
        );
      
  }
  
  
 }











