import {createAction, props} from "@ngrx/store";
import {IBook} from "../interfaces/book.interface";

export const getBooks = createAction('[Books] Get Books')
export const getBooksSuccess = createAction('[Books] Get Books Success',
  props<{books: IBook[]}>())
export const getBooksFail = createAction('[Books] Get Books Fail',
  props<{err: string}>()
  )
