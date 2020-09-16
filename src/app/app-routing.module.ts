import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Book } from '../models/book';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'detail/:id', component: BookDetailsComponent },
  { path: 'create-book', component: CreateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
