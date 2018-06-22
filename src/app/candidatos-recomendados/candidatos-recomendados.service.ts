import { Candidato } from './../candidatos-recomendados.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';



export interface CandidatoDetathe {
  candidate_cpf: string;
  source_id: number;
  source_processed: boolean;
  source_type: string;
  source_url: string;
}

export interface CandidatoDetathe {
  candidate_cpf: string;
  source_id: number;
  source_processed: boolean;
  source_type: string;
  source_url: string;
}



@Injectable({
  providedIn: 'root'
})
export class CandidatosRecomendadosService {

  constructor(private http: HttpClient) { }




}
