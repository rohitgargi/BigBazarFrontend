import { createAction, props } from "@ngrx/store";
import { IAuthUser } from "src/app/models/IAuthUser";

export const login = createAction(
    '[Log in Component] Login User',
    props<{email:string, password: string}>()
);

export const loginSuccess = createAction(
    '[Log in succeeded] Login Success',
    props<{user: any}>()
);
export const loginFail = createAction(
    '[Login Failed] Login Fail',
    props<{error:any}>()
);