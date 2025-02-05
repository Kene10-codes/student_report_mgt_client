import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  _url = 'https://student-mgt-backend.onrender.com/api/v1'
  constructor(private _httpClient: HttpClient) { }

  signup(data: any, header: any): Observable<any> {
    return this._httpClient.post<string>(`${this._url}/student/signup`, data, { headers: header })
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || 'Server Error')
  }
}
