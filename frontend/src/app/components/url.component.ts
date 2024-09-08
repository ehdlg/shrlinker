import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../services/url.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { URL } from '../types';

@Component({
  selector: 'app-url',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule, RouterLink],
  template: `
    <div class="w-full bg-white border shadow-lm h-1/2 mx-auto rounded">
      <h2 class="text-4xl text-slate-700 text-center mt-8">
        Create a new short URL
      </h2>
      <form (submit)="onSubmit()" class="flex justify-center mt-4 w-full">
        <input
          type="text"
          name="shortCode"
          id="shortCode"
          [(ngModel)]="shortCode"
          class="w-1/3 px-4 py-2 rounded outline-none bg-slate-100 "
        />
        <button type="submit" class="hidden"></button>
      </form>
      @if ($url | async; as url) {
      <h2>Your short URL for {{ url.url }}</h2>

      <p>
        <a [routerLink]="url.shortCode">{{ url.shortCode }}</a>
      </p>
      }
    </div>
  `,
  styles: ``,
})
export class UrlComponent {
  public $url!: Observable<URL | null>;
  public shortCode: string = '';
  constructor(private service: UrlService) {
    this.$url = this.service.url$;
  }

  onSubmit() {
    this.service.create(this.shortCode);
    this.shortCode = '';
  }
}
