import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  getBookFromServices(): void {
    this.bookService.getBook().subscribe(updatedBook => this.books = updatedBook);
  }

  ngOnInit(): void {
    this.getBookFromServices();
  }

  //Event binding
  selectedBook: Book;
  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
