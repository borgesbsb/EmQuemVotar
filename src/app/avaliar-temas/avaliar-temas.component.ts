import { HomeComponent } from './../home/home.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Tema} from './tema/tema.model';
import {Theme, AvaliarTemasService, Resposta, Rating, Resposta2} from './avaliar-temas.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { CandidatosRecomendadosService } from '../candidatos-recomendados.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'eqv-avaliar-temas',
  templateUrl: './avaliar-temas.component.html',
  providers: [ AvaliarTemasService, UserService ],
  styleUrls: ['./avaliar-temas.component.css']
})


export class AvaliarTemasComponent implements OnInit {
  //array de temas
email = '';
themes: Theme[];
themes_recomender = [];
cadastrando_peso: Resposta2;
_candidatosLista: CandidatosRecomendadosService;
status_code = '';


  // tslint:disable-next-line:max-line-length
  constructor(
    private route: ActivatedRoute,
    private themesService: AvaliarTemasService,
    private _userEmail: HomeService,
    _candidatosLista: CandidatosRecomendadosService,
    private router: Router) {
    this.themesService.getThemesAll().subscribe(
      (data: Resposta) =>  { this.themes = data['themes'];
        this.setRecomender(this.themes);
      }
     );
    this._candidatosLista = _candidatosLista;
    this.email = this._userEmail.getEmail().user_email;
      console.log(this.email);
   }

   setRecomender(thma) {
    for (let tem of thma) {
        const objeto: Rating = {
          nome: tem.theme_name,
          peso: 3,
        } as Rating;
        this.themes_recomender.push(objeto);
       }
    }

    setSlidervalue(event: any, tema: Rating) {
      this[event.source._elementRef.nativeElement.attributes.valvar.nodeValue] = event.value;
      tema.peso =  event.value;
      console.log(event.value);
    }

    pitch(event: any) {
      console.log(event.value);
    }

    criandoString( objeto) {
      let messagem = '{';
      for (let campo of objeto) {
        messagem += '\'' + campo.nome + '\': ' + '\'' + campo.peso + '\''  + ',';
      }
      messagem += '\}';


      return messagem;
    }

    addEmail() {
      this._userEmail.addEmail().subscribe(
        res => { this.status_code = res['status_code'];
         }, (err: HttpErrorHandler) => {
            this.status_code = err.error['status_code'];
          }
      );
    }

    gerarRecomendacao() {
      this.themesService.recomendar(this.email).subscribe(
          lista_recomendacao => {
          this._candidatosLista.setRecomendacao(lista_recomendacao['candidates']);
          this.router.navigate(['/candidatos-recomendados']);
        }
      );
    }

    gerarSimilaridade() {
      this.themesService.gerarSimilaridade(this.email).subscribe();
    }

    goRecomender() {
      this.addEmail();
      this.gerarSimilaridade();
      this.cadastrando_peso = { user_email: this.email, user_ratings: this.criandoString(this.themes_recomender)};
      this.themesService.addPesos(this.cadastrando_peso).subscribe(
          res => { console.log(res['status']);
                   this.gerarRecomendacao();
          },
          (err: HttpErrorHandler) => {
              if (err.error instanceof Error) {
                  console.log(err);
                  this.gerarRecomendacao();
              } else {
                  console.log(this.email);
                  this.gerarRecomendacao();
            }
        }
      );
  }

  ngOnInit() {
  }

}
