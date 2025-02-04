import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ReportService } from './report/report.service';
@Component({
  selector: 'app-dashboard',
  providers: [ReportService],
  imports: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private reportService:  ReportService ) { }
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
    this.getReport()
  }

  getReport() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token?.['accessToken']}`
    }
      this.reportService.getReport(Number(this.id), headers).subscribe(response => {
        this.report = response
      })
  }
}
