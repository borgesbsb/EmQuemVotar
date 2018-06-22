import { HomeComponent } from './../home/home.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Tema} from './tema/tema.model';
import {Theme, AvaliarTemasService, Resposta, Rating, Resposta2} from './avaliar-temas.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { CandidatosRecomendadosService } from '../candidatos-recomendados.service';


@Component({
  selector: 'eqv-avaliar-temas',
  templateUrl: './avaliar-temas.component.html',
  providers: [ AvaliarTemasService ],
  styleUrls: ['./avaliar-temas.component.css']
})


export class AvaliarTemasComponent implements OnInit {
  //array de temas


@ViewChild(HomeComponent) home;
email = '';

themes: Theme[];
themes_recomender = [];
cadastrando_peso: Resposta2;
_candidatosLista: CandidatosRecomendadosService;

  constructor(private themesService: AvaliarTemasService, _candidatosLista: CandidatosRecomendadosService) {
    this.themesService.getThemesAll().subscribe(
      (data: Resposta) =>  { this.themes = data['themes'];
        this.setRecomender(this.themes);
      }
     );
    this._candidatosLista = _candidatosLista;
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

  goRecomender() {
    this.email = 'borges.bnjamin@gmail.com';
    console.log(this.criandoString(this.themes_recomender));
    this.cadastrando_peso = { user_email: this.email, user_ratings: this.criandoString(this.themes_recomender)};
    this.themesService.addPesos(this.cadastrando_peso).subscribe(
      res => { console.log(res['status']);
      this.themesService.recomendar(this.email).subscribe(
        lista_recomendacao =>  {
          this._candidatosLista.setRecomendacao(lista_recomendacao['candidates']);
          console.log(this._candidatosLista.getRecomendacao());
        }
      );
      }  ,
      (err: HttpErrorHandler) => {
        if (err.error instanceof Error) {
          console.log(err);
        } else {
          console.log(this.email);
          this.themesService.recomendar(this.email).subscribe(
            lista_recomendacao =>  {
              this._candidatosLista.setRecomendacao(lista_recomendacao['candidates']);
              console.log(this._candidatosLista.getRecomendacao());
            }
          );
        }
      }
    );
  }

  ngOnInit() {
  }

}


