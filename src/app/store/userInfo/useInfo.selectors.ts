import { createSelector } from '@ngrx/store';
import { AppState } from "@store/AppState";
import { UserInfoState } from "@store/state/userInfoState";
export const selectFeature = (state:AppState) => state.userInfoFeature;

export const selectFeatureUserInfo = createSelector(
    selectFeature,
    (state:UserInfoState) => state
)