import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private aungulatFireAuth: AngularFireAuth) {  }
  loginWithEmail(email:string, password: string){
    return this.aungulatFireAuth.auth.signInWithEmailAndPassword(email, password)
  }  
  registerWithEmail(email:string, password: string){
    return this.aungulatFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  getStatus() {
    return this.aungulatFireAuth.authState;
  } 
  logOut(){
    return this.aungulatFireAuth.auth.signOut();
  }
}
