import { HttpErrorHandler } from './../http-error-handler.service';
import { SubtemaComponent } from './../avaliar-temas/tema/subtema/subtema.component';
import { Component, OnInit, Injectable } from '@angular/core';
import {Email, HomeService} from './home.service';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {AvaliarTemasService} from '../avaliar-temas/avaliar-temas.service';



@Component({
  selector: 'eqv-home',
  templateUrl: './home.component.html',
  providers: [ UserService ],
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

    email = '';
    private status_code: string;


  constructor(private homeService: HomeService, private router: Router) {
    this.status_code = '';
  }


  goThemes(user_email:  string) {
    const newEmail: Email = { user_email } as Email;
    this.homeService.setEmail(newEmail);
    this.router.navigate(['/avaliar-temas']);
  }

  ngOnInit() {
  }

}
