import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { matchRegex } from '../shared/validators/validator';
import { login } from '../store/actions/auth.actions';

import * as moment from 'moment';
import { selectFeatureState } from '../store/selectors/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 

  loginForm= this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8), matchRegex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])'))]]
  })

  constructor(private store: Store<{loggedIn:boolean}>, private fb: FormBuilder, private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
   
  }

  
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    const formval = this.loginForm.value;

    if(formval.email && formval.password){
        this.store.dispatch(login())
        this.authService.login(formval.email, formval.password)
        .subscribe(()=>{
          console.log("User is logged in");
          this.route.navigate(['home']);
        })
    }

  }

}
