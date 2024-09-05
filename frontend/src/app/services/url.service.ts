import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../types';
import { Observable, take } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  get(shortCode: string): Observable<URL> {
    return this.http
      .get<URL>(`${environment.apiUrl}/${shortCode}`)
      .pipe(take(1));
  }

  create(url: string): Observable<URL> {
    const body = {
      url,
    };
    return this.http
      .post<URL>(environment.apiUrl, body, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .pipe(take(1));
  }
}
