import { HomeComponent } from './../home/home.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Tema} from './tema/tema.model';
import {Theme, AvaliarTemasService, Resposta, Rating, Resposta2} from './avaliar-temas.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { CandidatosRecomendadosService, CandidatoDetathe, Candidato } from '../candidatos-recomendados.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HomeService, Email } from '../home/home.service';


@Component({
  selector: 'eqv-avaliar-temas',
  templateUrl: './avaliar-temas.component.html',
  providers: [ AvaliarTemasService],
  styleUrls: ['./avaliar-temas.component.css']
})


export class AvaliarTemasComponent implements OnInit {
  //array de temas
email = '';
themes: Theme[];
themes_recomender = [];
cadastrando_peso: Resposta2;
candidatosLista: Candidato[];
status_code = '';
public loading = false;


  // tslint:disable-next-line:max-line-length
  constructor(
    private route: ActivatedRoute,
    private themesService: AvaliarTemasService,
    private _userEmail: HomeService,
    private candidatoService: CandidatosRecomendadosService,
    private router: Router) {
    this.loading = true;
    this.themesService.getThemesAll().subscribe(
      (data: Resposta) =>  { this.themes = data['themes'];
        this.setRecomender(this.themes);
        this.loading = false;
      }
     );
      this._userEmail.setEmail( {user_email: this._userEmail.getEmail().user_email + this.generateRandomString1(10) } as Email );
      this.email = this._userEmail.getEmail().user_email;
      console.log(this.email);
   }

    generateRandomString1(l) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charsLength = chars.length;
    let string = '';

      for ( let i = 0; i < l; i++) {
        string += chars.charAt(Math.floor(Math.random() * charsLength));
      }
    return string;
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
          this.candidatoService.setRecomendacao(lista_recomendacao['candidates']);
          this.router.navigate(['/candidatos-recomendados']);
          this.loading = false;

        }
      );
    }

    gerarSimilaridade() {
      this.themesService.gerarSimilaridade(this.email).subscribe();
    }

    goRecomender() {
      this.loading = true;
      this.addEmail();
      this.cadastrando_peso = { user_email: this.email, user_ratings: this.criandoString(this.themes_recomender)};
      this.themesService.addPesos(this.cadastrando_peso).subscribe(
          res => { console.log(res['status']);
                  this.gerarSimilaridade();
                  this.gerarRecomendacao();
          },
          (err: HttpErrorHandler) => {
              if (err.error instanceof Error) {
                  console.log(err);
                  this.gerarSimilaridade();
                  this.gerarRecomendacao();
              } else {
                  console.log(this.email);
                  this.gerarSimilaridade();
                  this.gerarRecomendacao();
            }
        }
      );
  }

  ngOnInit() {
  }

}
