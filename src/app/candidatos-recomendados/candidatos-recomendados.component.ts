import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CandidatosRecomendadosService, Candidato, SourceDetalhes, CandidatoDetathe } from '../candidatos-recomendados.service';


@Component({
  selector: 'eqv-candidatos-recomendados',
  templateUrl: './candidatos-recomendados.component.html',
  providers: [],
  styleUrls: ['./candidatos-recomendados.component.css']
})
export class CandidatosRecomendadosComponent implements OnInit {
  private _candidatosLista: Candidato[];
  private candidatoDetalhe: CandidatoDetathe[];


  constructor(private _candidatosRecomendadosService: CandidatosRecomendadosService) {
    this._candidatosLista = _candidatosRecomendadosService.getRecomendacao();
    console.log(this._candidatosLista);
   }

   getPerfil(candidate_cpf) {
    this._candidatosRecomendadosService.getSourceCandidate(candidate_cpf).subscribe(
      (sourceDetalhes: SourceDetalhes) => { this.candidatoDetalhe = sourceDetalhes['sources'];
     }
    );
   }

  ngOnInit() {
  }

}

