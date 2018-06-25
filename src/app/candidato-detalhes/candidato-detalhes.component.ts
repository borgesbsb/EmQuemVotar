import { CandidatoDetathe, CandidatosRecomendadosService, Candidato } from '../candidatos-recomendados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eqv-candidato-detalhes',
  templateUrl: './candidato-detalhes.component.html',
  providers: [ ],
  styleUrls: ['./candidato-detalhes.component.css']
})
export class CandidatoDetalhesComponent implements OnInit {
  detalhesPerfil: CandidatoDetathe[];
  candidato: Candidato;

  constructor(private candidatoService: CandidatosRecomendadosService) {
      this.detalhesPerfil = this.candidatoService.getCandidatoDetalhes();
      this.candidato = this.candidatoService.getCandidato();
      this.detalhesPerfil = this.candidatoService.getCandidatoDetalhes();
      this.candidatoService.getSourceCandidate(this.candidato.candidate_cpf).subscribe(
        sourceDetalhes => { this.detalhesPerfil = sourceDetalhes['sources'];
        }
   );


   }

  ngOnInit() {
  }

}
