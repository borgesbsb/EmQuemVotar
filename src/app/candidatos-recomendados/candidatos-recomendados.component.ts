import { Component, OnInit } from '@angular/core';
import { CandidatosRecomendadosService, Candidato } from '../candidatos-recomendados.service';


@Component({
  selector: 'eqv-candidatos-recomendados',
  templateUrl: './candidatos-recomendados.component.html',
  providers: [],
  styleUrls: ['./candidatos-recomendados.component.css']
})
export class CandidatosRecomendadosComponent implements OnInit {
  _candidatosLista: Candidato[];

  constructor(_candidatosLista: CandidatosRecomendadosService) {
    this._candidatosLista = _candidatosLista.getRecomendacao();
    console.log(this._candidatosLista);
   }

   getPerfil(candidate_cpf) {
     
   }

  ngOnInit() {
  }

}

