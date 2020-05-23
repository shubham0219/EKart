import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor( private db: AngularFireDatabase) { }

  saveUser(user: firebase.User){
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
}
