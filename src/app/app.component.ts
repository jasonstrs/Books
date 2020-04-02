import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDcXCG4q0NIIAS4mwPw33nWbsUOoBsNwdw",
      authDomain: "books-37769.firebaseapp.com",
      databaseURL: "https://books-37769.firebaseio.com",
      projectId: "books-37769",
      storageBucket: "books-37769.appspot.com",
      messagingSenderId: "230004915042",
      appId: "1:230004915042:web:f5f3ee36c616cf22194a3b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
}
