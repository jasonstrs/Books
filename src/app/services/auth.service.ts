import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid:string;

  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve,reject) => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string,password:string){
    return new Promise(
      (resolve,reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          (resultat)=>{ // la connexion fonctionne
            resolve();
          },
          (error) => { // fonctionne pas
            reject(error);
          }
        );
      }
    );
  }

  signOutUser(){
    firebase.auth().signOut();
  }



}
