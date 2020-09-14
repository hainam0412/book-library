import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BookList } from './bookList';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBook(): Observable<Book[]> {
    this.messageService.addMessage(` ${new Date().toLocaleString()} Get List of Book`);
    return of(BookList);

  }


  constructor(public messageService: MessageService) { }
}
