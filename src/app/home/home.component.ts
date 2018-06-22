import { HttpErrorHandler } from './../http-error-handler.service';
import { SubtemaComponent } from './../avaliar-temas/tema/subtema/subtema.component';
import { Component, OnInit, Injectable } from '@angular/core';
import {Email, HomeService} from './home.service';
import { Router } from '@angular/router';



@Component({
  selector: 'eqv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    email = '';

    constructor(private homeService: HomeService, private router: Router) {
    this.homeService = homeService;
   }

  addEmail(user_email:  string) {
    const newEmail: Email = { user_email } as Email;
    this.homeService.addEmail(newEmail).subscribe(
    );
  }

  goThemes(user_email:  string) {
    const newEmail: Email = { user_email } as Email;
    this.homeService.addEmail(newEmail).subscribe(
      res => { console.log(res['status']);
               this.email = user_email;
      },
      (err: HttpErrorHandler) => {
        if (err.error instanceof Error) {
          console.log(err);
          this.email = user_email;
          console.log(this.email);
        } else {
          console.log(err.error);
          this.email = user_email;
          console.log(this.email);
        }
      }
    );
    this.router.navigate(['/avaliar-temas']);
  }

  ngOnInit() {
  }

}
