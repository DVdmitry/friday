import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as PostActions from '../state/post.actions'
import {Observable} from "rxjs";
import {isLoadingSelector, postsSelector} from "../state/post.selectors";
import {IAppStateInterface} from "../../interface/app-state.interface";
import {IPost} from "../../services/post.service";
import {AdItem} from "../../dynamic-components/ad.item";
import {AdService} from "../../services/ad.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  ads: AdItem[] = []
  isLoading$: Observable<boolean>
  posts$: Observable<IPost[]>
  constructor(private store: Store<IAppStateInterface>, private adService: AdService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.posts$ = this.store.pipe(select(postsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
    this.ads = this.adService.getAds()
  }

}
