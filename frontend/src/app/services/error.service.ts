import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();

  setError(error: string) {
    this.errorSubject.next(error);
  }

  clearErrors() {
    this.errorSubject.next(null);
  }
}
