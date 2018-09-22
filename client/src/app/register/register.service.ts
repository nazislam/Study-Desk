import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {
  
  }

  postUser(user: User) {
    console.log('posting user: ', user);
  }

}
