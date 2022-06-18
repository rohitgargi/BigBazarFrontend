import { createReducer, on } from "@ngrx/store";
import { login } from '../actions/auth.actions';

const initalState = false;

export const loginReducer = createReducer(
    initalState,
    on(login,(state)=> true )
);
