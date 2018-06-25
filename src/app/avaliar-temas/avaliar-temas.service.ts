import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Email } from '../home/home.service';


export interface Theme {
  theme_id: number;
  theme_name: string;
  theme_peso: number;
}

export interface Resposta {
  status:  string;
  themes: Theme[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export interface Rating {
  nome: string;
  peso: number;
}

export interface Resposta2 {
  user_email: string;
  user_ratings: string;
}


@Injectable({
  providedIn: 'root'
})
export class AvaliarTemasService {

  url = 'https://emquemvotar-api-heroku.herokuapp.com/api/theme/all';

  url2 =  'https://emquemvotar-api-heroku.herokuapp.com/api/rating/register';

  recomendar_url =  'https://emquemvotar-api-heroku.herokuapp.com/api/recommender/';

  gerar_similaridade_url = 'https://emquemvotar-api-heroku.herokuapp.com/api/recommender/register';


  constructor(private http: HttpClient) { }

  getThemesAll() {
    return this.http.get<Resposta>(this.url)
    .pipe(
      retry(3)
    );
  }

  addPesos(resposta2: Resposta2): Observable<Resposta2> {
    return this.http.post<Resposta2>(this.url2, resposta2, httpOptions )
    .pipe(
      retry(3)
    );
  }

  gerarSimilaridade(email: string) {
    // tslint:disable-next-line:prefer-const
    let email_objeto = { user_email: email } as Email;
    return this.http.post( this.gerar_similaridade_url, email_objeto, httpOptions).pipe(
      retry(3)
    );
  }

  recomendar(email: string) {

    // tslint:disable-next-line:max-line-length
    return this.http.get(this.recomendar_url + email, httpOptions )
    .pipe(
      retry(3)
    );
  }

}
