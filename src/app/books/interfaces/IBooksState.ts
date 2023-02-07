import {IBook} from "./book.interface";

export interface IBooksState {
  isLoading: boolean,
  books: IBook[],
  error: string
}
