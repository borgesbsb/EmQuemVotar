import { Candidato } from './../candidatos-recomendados.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';



export interface CandidatoDetathe {
  candidato_id: number;
  candidato_name: string;
  candidato_peso: number;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatosRecomendadosService {

  constructor() { }
}
