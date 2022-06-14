import { createAction,props } from '@ngrx/store';
import { UserInfoState } from "@store/state/userInfoState";


export const settingUserInfo = createAction(
    '[UserInfo] settingUserInfo',
    props<{userInfo:UserInfoState}>()
);