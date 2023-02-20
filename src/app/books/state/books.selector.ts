import {IAppStateInterface} from "../../interface/app-state.interface";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectFeature = (state: IAppStateInterface) => state.books
export const booksSelector = createSelector(selectFeature, state => state.books)
export const isLoadingBooksSelector = createSelector(selectFeature, state => state.isLoading)
export const errorBooksSelector = createSelector(selectFeature, state => state.error)
