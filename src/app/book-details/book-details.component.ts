import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private messageService: MessageService

  ) { }

  ngOnInit(): void {
    this.getBookFromRoute();
  }

  getBookFromRoute(): void {
    //Get id from route
    const id = +this.route.snapshot.paramMap.get('id');
    //Call service by id to get book
    this.bookService.getBookFromId(id).subscribe(book => this.book = book);
  }

  save(): void {
    this.bookService.updateBook(this.book).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
    this.messageService.deleteAllMessage();
  }

  redirect(): void {
    this.location.go('/books');
  }

  deleteBook(bookId: number): void {
    bookId = +this.route.snapshot.paramMap.get('id');
    this.bookService.deleteBook(bookId).subscribe(() => this.redirect());
  }

}
