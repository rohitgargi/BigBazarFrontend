import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchRegex } from '../shared/validators/validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, DoCheck {

  loginForm= this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8), matchRegex('Password should contain combination of Uppercase, lowercase and numeric valie',new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])'))]]
  })

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.password)
  }

  
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.route.navigate(['home']);
  }

}
