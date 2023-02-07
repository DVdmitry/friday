import {Injectable} from "@angular/core";
import {of, Observable} from "rxjs";
import {IBook} from "../interfaces/book.interface";

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  getBooks(): Observable<IBook[]> {
    return of([
      {id: '1', title: 'Book 1'},
      {id: '2', title: 'Book 2'},
      {id: '3', title: 'Book 3'},
      {id: '4', title: 'Book 4'},
    ])
  }
}
