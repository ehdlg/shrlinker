import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="text-center underline text-3xl">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}