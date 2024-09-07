import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../types';
import { BehaviorSubject, take } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  private urlSubject = new BehaviorSubject<URL | null>(null);
  public $url = this.urlSubject.asObservable();

  get(shortCode: string): void {
    this.http
      .get<URL>(`${environment.apiUrl}/${shortCode}`)
      .pipe(take(1))
      .subscribe((url) => this.updateUrl(url));
  }

  create(url: string): void {
    const body = {
      url,
    };

    this.http
      .post<URL>(environment.apiUrl, body, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .pipe(take(1))
      .subscribe((url) => this.updateUrl(url));
  }

  updateUrl(newUrl: URL) {
    this.urlSubject.next(newUrl);
  }
}
