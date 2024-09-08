import { Component, Input, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { Observable, windowToggle } from 'rxjs';
import { URL } from '../types';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-redirect',
  template: `
    <h2 class="text-4xl text-center text-slate-800">
      You are being redirected...
    </h2>
  `,
})
export class RedirectComponent implements OnInit {
  @Input() shortCode!: string;
  public url$!: Observable<URL | null>;
  public error$!: Observable<string | null>;
  constructor(
    private service: UrlService,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.url$ = this.service.url$;
    this.error$ = this.errorService.error$;
  }

  ngOnInit(): void {
    this.service.get(this.shortCode);

    this.error$.subscribe((error) => {
      if (null != error) this.router.navigate(['']);
    });

    this.url$.subscribe((url) => {
      if (null == url) return;

      let longUrl = url.url;

      if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://'))
        longUrl = `https://${longUrl}`;

      window.location.href = longUrl;
    });
  }
}
