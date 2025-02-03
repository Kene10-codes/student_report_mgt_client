import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = 'https://student-mgt-backend.onrender.com/api'
  constructor(private _httpClient: HttpClient) { }

  login(data: any, header: any): Observable<any> {
    return this._httpClient.post<string>(`${this._url}/auth/login`, data, { headers: header })
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || 'Server Error')
  }
}
