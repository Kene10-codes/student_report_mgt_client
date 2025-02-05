import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    constructor(private _httpClient: HttpClient) { }

    _url = 'https://student-mgt-backend.onrender.com/api/v1'

    getReport(id: number, header: any): Observable<any> {
        return this._httpClient.get(`${this._url}/student/report/${id}`, { headers: header }).pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.error || 'Server error')
    }
}
