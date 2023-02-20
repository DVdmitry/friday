import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IBook} from "../interfaces/book.interface";
import {booksSelector} from "../state/books.selector";
import {IAppStateInterface} from "../../interface/app-state.interface";
import * as BooksActions from "../state/books.actions"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<IBook[]>

  constructor(private store: Store<IAppStateInterface>) {
    this.books$ = store.pipe(
      select(booksSelector)
    )
  }

  ngOnInit(): void {
    this.store.dispatch(BooksActions.getBooks())
  }

}
