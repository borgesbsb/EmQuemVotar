import { CandidatoDetathe, CandidatosRecomendadosService } from './../candidatos-recomendados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eqv-candidato-detalhes',
  templateUrl: './candidato-detalhes.component.html',
  styleUrls: ['./candidato-detalhes.component.css']
})
export class CandidatoDetalhesComponent implements OnInit {
  private source: CandidatoDetathe[];
  constructor(private candidatoDetathe: CandidatosRecomendadosService) {
  //  this.source = this.candidatoDetathe;
   }

  ngOnInit() {
  }

}
