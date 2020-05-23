import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService ) {
   }

  ngOnInit(): void {
  }
  // method for logging in
  logIn(){

      // this.angularFireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      this.auth.logIn();
  }
}
