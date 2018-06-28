import { Rating } from './avaliar-temas/avaliar-temas.service';
import { CandidatoDetathe } from './candidatos-recomendados.service';
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

export interface Similaridade {
  candidate_cpf: string;
  rating: number;
  user_id: number;
}

export interface SimilaridadeResponse {
  similarity: Similaridade[];
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatosRecomendadosService {
  private rota_source = 'http://emquemvotar-api-heroku.herokuapp.com/api/source/';
  private rota_similaridade = 'https://emquemvotar-api-heroku.herokuapp.com/api/similarity/';
  private candidatosRecomendados: Candidato[];
  private candidatoDetalhes: CandidatoDetathe[];
  private candidato: Candidato;

  constructor(private http: HttpClient) { }

  getCandidato() {
    return this.candidato;
  }


  setCandidato( candidato ) {
    this.candidato = candidato;
  }

  setRecomendacao(candidatos) {
    this.candidatosRecomendados = candidatos;
  }

  getRecomendacao() {
    return this.candidatosRecomendados;
  }

  setCandidatoDetalhes(candidatoDetalhes: CandidatoDetathe[] ) {
    this.candidatoDetalhes = candidatoDetalhes;
  }

  getCandidatoDetalhes() {
    return this.candidatoDetalhes;
  }

  getSourceCandidate(cpf): Observable<CandidatoDetathe[]> {
    return this.http.get<CandidatoDetathe[]>(this.rota_source + cpf + '/items')
    .pipe(
      retry(3)
    );
  }

  getSimilaridade(email: string): Observable<SimilaridadeResponse> {
    return this.http.get<SimilaridadeResponse>(this.rota_similaridade + email)
    .pipe(
      retry(3)
    );

  }

}
