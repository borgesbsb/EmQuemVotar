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

    constructor(private homeService: HomeService, private userService: UserService, private router: Router) {
      this.homeService = homeService;
      this.userService = userService;
   }

  addEmail(user_email:  string) {
    const newEmail: Email = { user_email } as Email;
    this.homeService.addEmail(newEmail).subscribe(
    );
  }

  goThemes(user_email:  string) {
      console.log("go themes");
      console.log(user_email);
    const newEmail: Email = { user_email } as Email;
    this.homeService.addEmail(newEmail).subscribe(
      res => { console.log(res['status']);
               this.email = user_email;
      },
      (err: HttpErrorHandler) => {
        if (err.error instanceof Error) {
          console.log(err);

          this.email = user_email;
        } else {
          console.log(err.error);
          console.log("que foi enviado email");
          this.userService.setUserEmail(user_email);
          console.log(this.userService.getUserEmail());
          this.router.navigate([`/avaliar-temas/${this.userService.getUserEmail()}`]);
        }
      }
    );

  }

  ngOnInit() {
  }

}
