import {IPostsState} from "./posts.state.interface";
import {createReducer, on} from "@ngrx/store";
import * as PostActions from './post.actions'

export const initialState: IPostsState = {
  isLoading: false,
  posts: [],
  error: null
}

export const reducers = createReducer(
  initialState,
  on(PostActions.getPosts, state => ({...state, isLoading: true})),
  on(PostActions.getPostsSuccess, (state, action) => ({...state, isLoading: false, posts: action.posts})),
  on(PostActions.getPostsFailure, (state, {error}) => ({...state, isLoading: false, error}))
)
