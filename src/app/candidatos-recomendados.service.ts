import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';




export interface Candidato {
  candidate_birthdate: string;
  candidate_cpf: string;
  candidate_facebook: string;
  candidate_name: string;
  candidate_political_party: string;
  candidate_site: string;
  candidate_twitter: string;
}

export interface RecomendacaoLista {
  candidates: Candidato[];
  status:  string;
}


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




@Injectable()
export class CandidatosRecomendadosService {
  private rota_source = 'http://emquemvotar-api-heroku.herokuapp.com/api/source/';
  private candidatosRecomendados: Candidato[];
  constructor(private http: HttpClient) { }

  setRecomendacao(candidatos) {
    this.candidatosRecomendados = candidatos;
  }

  getRecomendacao() {
    return this.candidatosRecomendados;
  }


  getSourceCandidate(cpf): Observable<SourceDetalhes> {
    return this.http.get<SourceDetalhes>(this.rota_source + '/items')
    .pipe(
      retry(3)
    );
  }

}
