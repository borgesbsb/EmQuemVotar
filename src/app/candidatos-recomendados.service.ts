import { Injectable } from '@angular/core';



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


@Injectable()
export class CandidatosRecomendadosService {

  private candidatosRecomendados: Candidato[];
  constructor() { }

  setRecomendacao(candidatos) {
    this.candidatosRecomendados = candidatos;
  }

  getRecomendacao() {
    return this.candidatosRecomendados;
  }


}
