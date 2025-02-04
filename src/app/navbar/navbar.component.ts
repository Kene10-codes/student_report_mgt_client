import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor() { }
  token: { accessToken?: string, name?: string } = {}

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token') || '""') || ''
  }

  logout() {
    localStorage.clear()
  }

}
