import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";

import * as AuthActions from "../actions/auth.actions";
import { IAuthUser } from "src/app/models/IAuthUser";

@Injectable()


export class AuthEffects{

    login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(AuthActions.login),
          concatMap((action) =>
            this.authService.login(action.email, action.password).pipe(
              map((user) => AuthActions.loginSuccess({ user: user})),
              catchError((error) => of(AuthActions.loginFail({ error })))
            )
          )
        );
      });

    constructor(private actions$: Actions, private authService: AuthService){

    }
}