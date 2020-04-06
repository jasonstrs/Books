import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/Book.model';
import { Subscription } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;


  constructor(private booksService: BooksService,private router: Router,private auth:AuthService) { }
  

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) { // si l'utilisateur est connecte on stocke son uid
      this.auth.uid=user.uid;
    }
    this.booksService.books=[]; // on vide le tableau qui contient les livres

    this.booksSubscription=this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

  onNewBook(){
    this.router.navigate(['/books','new']);
  }

  onDeleteBook(book: Book){
    this.booksService.removeBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books','view',id]);
  }

}
