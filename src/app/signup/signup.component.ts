import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PasswordMatchValidator } from '../shared/pasword.validator';
import { SignupService } from './signup/signup.service';


@Component({
  selector: 'app-signup',
  providers: [SignupService],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  errorMsg = ''
  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: PasswordMatchValidator('password', 'confirmPassword')
    })
  }

  onSubmit() {
    const headers = {
      'Content-Type': 'application/json'
    }
    if (this.signupForm.valid) {
      this.signupService.signup(this.signupForm.value, headers).subscribe(response => {
        const accessToken = response.accessToken;
        localStorage.setItem('accessToken', accessToken)
        this.signupForm.reset()
        this.router.navigate(['/dashboard'])
      }, error => this.errorMsg = error.message)

    }
  }


}
