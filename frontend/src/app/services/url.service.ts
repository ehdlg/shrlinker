import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../types';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  get(shortCode: string): Observable<URL> {
    return this.http.get<URL>(`${environment.apiUrl}/${shortCode}`);
  }
}
