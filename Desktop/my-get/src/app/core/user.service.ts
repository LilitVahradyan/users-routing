import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserModel} from '../models/user.model';
import {environment} from '../../../environments/environment'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  public getUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(`${environment.backendEndPoint}data.json`);
  }
}




