import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || { };
  }

  private handleError(error: any) {
    console.error('post error:', error);
    return Observable.throw(error.statusText);
  }

  postUser(user: User): Observable<any> {
    // console.log('posting user: ', user);
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/register', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
