import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchRegex, MustMatch } from '../shared/validators/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   signupForm= this.fb.group({
     firstName:['', Validators.required],
     lastName:['', Validators.required],
     email:['',[Validators.required, Validators.email]],
     password:['',[Validators.required, Validators.minLength(8), matchRegex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])'))]],
     confirmPwd:['', Validators.required]
  },{
    validator: MustMatch('password','confirmPwd')
  })


  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  get firstName(){
    return this.signupForm.get('firstName');
  }
  get lastName(){
    return this.signupForm.get('lastName');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get confirmPwd(){
    return this.signupForm.get('confirmPwd');
  }

  onSubmit(){
    this.route.navigate(['login']);
  }

}
