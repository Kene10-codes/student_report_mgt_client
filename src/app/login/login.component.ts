import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  errorMsg = ''


  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const headers = {
        'Content-Type': 'application/json'
      }

      this.loginService.login(this.loginForm.value, headers).subscribe(response => {
        const accessToken = response.access_token
        localStorage.setItem('accessToken', accessToken)
        this.loginForm.reset()
        this.router.navigate(['/dashboard'])
      }, error => this.errorMsg = error.message)
    }
  }
}
