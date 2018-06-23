import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

export interface Email {
  user_email: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private email: Email;
  emailUrl = 'https://emquemvotar-api-heroku.herokuapp.com/api/auth/register';

  constructor( private http: HttpClient ) {}

  setEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  addEmail () {
    return this.http.post(this.emailUrl, this.email, httpOptions )
    .pipe(
      retry(3)
    );
  }



}
