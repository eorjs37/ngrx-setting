import { createReducer, on } from '@ngrx/store';
import { settingUserInfo } from './userInfo.actions'
import { UserInfoState } from "@store/state/userInfoState";
//초기값 세팅
export const initialState:UserInfoState = {
    name:'',
    age:-1
}

export const userInfoReducer = createReducer(
    initialState,
    //세팅
    on(settingUserInfo,(state,{userInfo})=>({
        ...state,
        name:userInfo.name,
        age:userInfo.age
    })),
)