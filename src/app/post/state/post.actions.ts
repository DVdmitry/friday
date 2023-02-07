import {createAction, props} from "@ngrx/store";
import {IPost} from "../../services/post.service";

export const getPosts = createAction('[Posts] Get Posts')
export const getPostsSuccess = createAction('[Posts] Get Posts success',
  props<{posts: IPost[]}>()
)
export const getPostsFailure = createAction('[Posts] Get Posts Fail',
  props<{error: string}>()
)
