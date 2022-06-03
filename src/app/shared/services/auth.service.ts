import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "src/app/models/user";
import {shareReplay, tap} from 'rxjs/operators';

import * as moment from 'moment';

@Injectable()


export class AuthService{
    constructor(private http: HttpClient){

    }

    //We are calling shareReplay to prevent the receiver of this Observable from accidentally triggering multiple POST requests due to multiple subscriptions.
    login(email: string, password: string){
        return this.http.post<IUser>('http://localhost:9000/login',{email, password})
        .pipe(
            tap(res=> {
                console.log("Response", res);
                this.setSession(res);
            }),
            shareReplay()
        )
    }

    private setSession(authResult:any) {
        console.log("Setting token", authResult)
        const expiresAt = moment().add(authResult.expiresIn,'second');
    
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          
    
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }
    
    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }
    
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    
    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        if(expiration){
          const expiresAt = JSON.parse(expiration);
          return moment(expiresAt);
        }
    
        return null;
        
        
    }   
}
