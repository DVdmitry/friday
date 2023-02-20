import {IPostsState} from "../post/state/posts.state.interface";
import {IBooksState} from "../books/interfaces/IBooksState";

export interface IAppStateInterface {
  posts: IPostsState,
  books: IBooksState
}
