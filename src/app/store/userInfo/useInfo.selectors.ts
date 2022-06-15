import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInfoState } from "@store/state/userInfoState";

export const getUserInfoState = createFeatureSelector<UserInfoState>('userInfoState');

export const getUserInfo = createSelector(
    getUserInfoState,
    (state:UserInfoState) => state
)
