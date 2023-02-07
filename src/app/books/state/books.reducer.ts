import {createReducer, on} from "@ngrx/store";
import {IBooksState} from "../interfaces/IBooksState";
import * as BooksActions from './books.actions'

const initState: IBooksState = {
  isLoading: false,
  books: [],
  error: ''
}

export const reducer = createReducer(initState,
    on(BooksActions.getBooks, state => ({...state, isLoading: true})),
    on(BooksActions.getBooksSuccess, (state, {books}) => ({...state, books, isLoading: false})),
    on(BooksActions.getBooksFail, (state, {err}) => ({...state, isLoading: false, error: err}))
  )
