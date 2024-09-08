import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlComponent } from './components/url.component';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UrlComponent],
  template: `
    <app-header />

    <main class="h-full m-auto max-w-4xl mt-20">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {}
