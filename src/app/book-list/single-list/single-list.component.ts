import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.scss']
})
export class SingleListComponent implements OnInit {

  book: Book;
  constructor(private route: ActivatedRoute,
            private booksService: BooksService,
            private router:Router
    ) { }

  ngOnInit(): void {
    this.book = new Book('','');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBooks(+id).then(
      (book: Book) =>{
        this.book=book;
      } 
    );
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
