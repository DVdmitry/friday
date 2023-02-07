import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as BooksActions from './books.actions'
import {catchError, map, mergeMap} from "rxjs/operators";
import {BooksService} from "../services/books.service";
import {of} from "rxjs";

@Injectable()
export class BooksEffects {
  getBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.getBooks),
    mergeMap(() => this.booksService.getBooks().pipe(
      map((books) => BooksActions.getBooksSuccess({books}),
        catchError(err => of(BooksActions.getBooksFail(err)))
    ))
  )))

  constructor(private actions$: Actions, private booksService: BooksService) {
  }
}
