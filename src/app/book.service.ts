import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl = 'http://localhost:3000/book';

  /**
   * GET METHOD get data from database
   =*/
  getBook(): Observable<Book[]> {
    /*
    this.messageService.addMessage(` ${new Date().toLocaleString()} Get List of Book`);
    return of(BookList);*/
    return this.http.get<Book[]>(this.bookUrl).pipe(
      //Success request
      tap(),
      //Failed request
      catchError(err => of([]))
    )
  }

  /**
   * Get book id ;
  =*/
  getBookFromId(id: number): Observable<Book> {
    //return of(BookList.find(Book => Book.id === id));

    const url = `${this.bookUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(),
      catchError(err => of(new Book))
    )
  }

  /** 
   * Update Book Method:PUT =*/
  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.bookUrl}/${book.id}`, book, httpOptions).pipe(
      tap(),
      catchError(err => of(new Book))
    )
  }

  /**
   * Create book Method:PUSH =*/
  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.bookUrl, newBook, httpOptions).pipe(
      tap(),
      catchError(err => of(new Book))
    )
  }

  /**
   * DELETE METHOD Delete book by Id ;
   =*/

  deleteBook(id: Number): Observable<Book> {
    const url = `${this.bookUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(),
      catchError(err => of(null))
    )
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) { }
}
