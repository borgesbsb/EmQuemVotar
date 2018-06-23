import { Candidato } from './../candidatos-recomendados.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';



export interface CandidatoDetathe {
  candidate_cpf: string;
  source_id: number;
  source_processed: boolean;
  source_type: string;
  source_url: string;
}

export interface SourceDetalhes {
  status: string;
  sources: CandidatoDetathe[];
}



@Injectable({
  providedIn: 'root'
})
export class CandidatosRecomendadosService {
  private rota_source = 'http://emquemvotar-api-heroku.herokuapp.com/api/source/';
  constructor(private http: HttpClient) { }

  getSourceCandidate(cpf): Observable<SourceDetalhes> {
    return this.http.get<SourceDetalhes>(this.rota_source + '/items');
    .pipe(
      retry(3)
    );
  }

}
