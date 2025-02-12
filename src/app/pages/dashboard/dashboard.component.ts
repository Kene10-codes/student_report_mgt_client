import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { StudentService } from './student/student.service';
@Component({
  selector: 'app-dashboard',
  providers: [StudentService],
  imports: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private studentService: StudentService) { }
  token: { accessToken?: string, name?: string, id?: number } = {}
  nameToken: string = ''
  id: number | string = ''
  report: any = ''
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = JSON.parse(localStorage.getItem('token') || '""') || ''
      this.nameToken = this.token?.['name'] || ''
      this.id = Number(this.token?.['id']) || 0
    }

    // invoke get report
    this.getStudents()
  }

  getStudents() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token?.['accessToken']}`
    }
    this.studentService.getStudents(Number(this.id), headers).subscribe(response => {
      console.log("res", response)
      this.report = response
    })
  }
}
