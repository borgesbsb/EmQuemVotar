import { Injectable } from '@angular/core';



export interface User {
  user_email: string;
}

@Injectable()
export class UserService {

  private user_email: User;
  constructor() { }

  setUserEmail(user_email) {
    this.user_email = user_email;
  }

  getUserEmail() {
    return this.user_email;
  }
}
