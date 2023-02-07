import {Injectable} from "@angular/core";
import {of, Observable} from "rxjs";
import {delay} from "rxjs/operators";

// type idType = '1' | '2' | '3'
//
// export type TPost = {
//   id: idType,
//   title: string
// }
export interface IPost {
  id: string;
  title: string
}

@Injectable({
  providedIn: 'root'
})

export class PostService {
  getPosts(): Observable<IPost[]> {
    const posts = [
      { id: '1', title: 'First Post'},
      { id: '2', title: 'Second Post'},
      { id: '3', title: 'Third Post'}
    ]
    return of(posts).pipe(
      delay(2000)
    )
  }
}
