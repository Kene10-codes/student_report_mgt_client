import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PasswordConfirmationValidator } from '../shared/pasword.validator';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group ({
      name: ['', [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',  [Validators.required]]
    }, { 
      validator: PasswordConfirmationValidator
    })
  }

  onSubmit() {
    if(this.signupForm.valid) {
      console.log('signup form is valid')
    }
  }


}
