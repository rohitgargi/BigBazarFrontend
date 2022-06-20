import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { IAuthUser } from "src/app/models/IAuthUser";
import * as AuthActions from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface State{
    isLoggedIn: boolean
    user: IAuthUser,
    error:any
}
const initalState : State= {
    isLoggedIn:false,
    user:{
        userId:"",
        idToken:"",
        email:"",
        expiresIn:""
    },
    error:null
};


export const reducer = createReducer(
    initalState,
    on(AuthActions.loginSuccess,(state, action) =>{
        return{
            ...state,
            user: action.user,
            error: null,
            isLoggedIn:true
        }
    }),
    on(AuthActions.loginFail, (state,action)=>{
        return {
            ...state,
            user:{
                userId:"",
                idToken:"",
                email:"",
                expiresIn:""
            },
            error: action.error,
            isLoggedIn:false
        }
    })
)

// export const loginReducer = createReducer(
//     initalState,
//     on(loginSuccess,(state,action)=>{
//         return {
//             ...state,
//             user:action.user,
//             error:null
//         }
//     })
// );
