import { HomeService } from './../home/home.service';
import { Component, OnInit } from '@angular/core';
import { CandidatosRecomendadosService,
         Candidato, CandidatoDetathe, Similaridade, SimilaridadeResponse } from '../candidatos-recomendados.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'eqv-candidatos-recomendados',
  templateUrl: './candidatos-recomendados.component.html',
  providers: [],
  styleUrls: ['./candidatos-recomendados.component.css']
})
export class CandidatosRecomendadosComponent implements OnInit {
  private _candidatosLista: Candidato[];
  private candidatoDetalhe: CandidatoDetathe[];
  private similaridades: Similaridade[];
  listCandidatos = [] ;
  private email = '';
  public loading = false;
  constructor(
    private _candidatosRecomendadosService: CandidatosRecomendadosService,
    private emailService: HomeService,
    config: NgbProgressbarConfig,
    private router: Router) {
      this.loading = true;
      this._candidatosLista = _candidatosRecomendadosService.getRecomendacao();
      this.email = this.emailService.getEmail().user_email;
      this._candidatosRecomendadosService.getSimilaridade(this.email).subscribe(
        (res: SimilaridadeResponse ) => {
          this.similaridades = res['similarity'];
          this.createList();
          config.max = 100;
          config.striped = true;
          config.animated = true;
          config.type = 'danger';
          config.height = '20px';
          this.loading = false;
        }
        );

   }

   createList() {
    for (let i = 0; i < this._candidatosLista.length; i++) {
      this.listCandidatos.push( {
        candidato: this._candidatosLista[i],
        similaridade: (this.similaridades[i].rating + 1) * 50
      });
    }
  }

   getPerfil(candidato) {
    this._candidatosRecomendadosService.setCandidato(candidato);
    this.router.navigate(['/candidato-detalhes']);
   }

  ngOnInit() {

  }

}
