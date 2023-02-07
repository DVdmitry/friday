import {IPost} from "../../services/post.service";

export interface IPostsState {
  isLoading: boolean
  posts: IPost[]
  error: string | null
}
