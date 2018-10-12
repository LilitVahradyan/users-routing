import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserModel } from '../models/user.model';

@Injectable({})
export class UserService {

  constructor(private http:HttpClient) { }
  public getUsers():Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>('https://jsonplaceholder.typicode.com/users');
  } 
  public getUserById(id):Observable<UserModel>{
    return this.http.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }  
}



