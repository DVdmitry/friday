import {IAppStateInterface} from "../../interface/app-state.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: IAppStateInterface) => state.posts

export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading)
export const postsSelector = createSelector(selectFeature, state => state.posts)
export const errorSelector = createSelector(selectFeature, state => state.error)
