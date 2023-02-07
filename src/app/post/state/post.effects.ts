import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as PostActions from './post.actions'
import {PostService} from "../../services/post.service";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PostActions.getPosts),
    mergeMap(() => this.postService.getPosts().pipe(
      map(posts => PostActions.getPostsSuccess({posts})),
    )),
  ))

  constructor(private actions$: Actions, private postService: PostService) {

  }
}
