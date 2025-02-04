import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(){}
  token: { accessToken?: string, name?: string } = {}
  nameToken: string = ''
  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token') || '""') || ''
    this.nameToken = this.token?.['name'] || ''
  }

}
