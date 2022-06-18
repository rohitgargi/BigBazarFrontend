import { createSelector } from "@ngrx/store";

export interface FeatureState {
    loggedIn: boolean
}

export interface AppState{
    feature: FeatureState
}

export const selectFeature = (state: AppState) => state.feature;


export const selectFeatureState = createSelector(
    selectFeature,
    (state: FeatureState) => state.loggedIn
)