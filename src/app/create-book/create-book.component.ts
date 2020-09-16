import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  books: Book[];
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
  }

  createBook(title: string, author: string, tag: string): void {
    title = title.trim();
    if (!title) {
      alert('title must not be blank');
      return;
    } else if (!author) {
      alert('Author must not be blank');
      return;
    }

    const newBook: Book = new Book();
    newBook.title = title;
    newBook.author = author;
    newBook.tag = tag;
    this.bookService.addBook(newBook).subscribe();
  }
}
