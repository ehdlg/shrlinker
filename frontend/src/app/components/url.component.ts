import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../services/url.service';
import { ErrorComponent } from './error.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { URL } from '../types';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-url',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule, RouterLink, ErrorComponent],
  template: `
    <app-error />
    <div
      class="w-11/12 p-2 bg-white shadow-md  min-h-[400px] flex flex-col justify-start items-center  mx-auto rounded"
    >
      @if ($url | async; as url) {
      <div
        class="flex flex-col gap-4 h-[400px] justify-around items-center w-10/12 p-2"
      >
        <div class="w-full flex flex-col gap-1">
          <h2 class="text-slate-700 text-lg">Your long URL</h2>
          <div class="w-full text-slate-800 p-2 bg-slate-100 rounded text-xl">
            <span>{{ url.url }}</span>
          </div>
        </div>

        <div class="w-full flex flex-col gap-1 ">
          <h2 class="text-slate-700 text-lg">Your short URL</h2>
          <div class="w-full text-slate-800 p-2 bg-slate-100 rounded text-xl">
            <span>{{ url.shortCode }}</span>
          </div>
        </div>

        <div class="flex justify-around w-full">
          <div
            class="border border-indigo-300 text-slate-800 hover:text-slate-200 p-4 rounded hover:cursor-pointer hover:border-transparent hover:bg-indigo-300 transition duration-200 ease-in"
          >
            <button (click)="copyToClipboard(url.shortCode)">
              Copy to clipboard
            </button>
          </div>

          <div
            class="border border-indigo-300 text-slate-800 hover:text-slate-200 p-4 rounded hover:cursor-pointer hover:border-transparent hover:bg-indigo-300 transition duration-200 ease-in"
          >
            <a [routerLink]="url.shortCode" target="_blank">Go to URL</a>
          </div>
        </div>
        <button
          class="bg-indigo-400 py-4 text-lg text-white w-5/6 rounded drop-shadow-xl hover:drop-shadow-none -translate-x-1 hover:bg-indigo-500 hover:translate-y-1 hover:-translate-x-1 transition ease-in duration-200"
          (click)="clearCurrentURL()"
        >
          Shorten another URL
        </button>
      </div>

      }@else {
      <form
        (submit)="onSubmit()"
        class="flex flex-col items-center justify-around h-[400px] w-full "
      >
        <label
          for="shortCode"
          class=" text-slate-700 text-lg flex flex-col w-10/12"
          >Shorten a long URL
          <input
            type="text"
            name="shortCode"
            id="shortCode"
            [(ngModel)]="shortCode"
            class="w-full px-4 py-2 block rounded mt-3 outline-none bg-slate-100 focus:drop-shadow-md transition ease-in duration-200 "
            required
          />
        </label>
        <button
          type="submit"
          class="bg-indigo-400 py-4 text-lg text-white w-5/6 rounded drop-shadow-xl hover:drop-shadow-none -translate-x-1 hover:bg-indigo-500 hover:translate-y-1 hover:-translate-x-1 transition ease-in duration-200"
        >
          Shorten
        </button>
      </form>

      }
    </div>
  `,
})
export class UrlComponent {
  public $url!: Observable<URL | null>;
  public shortCode: string = '';
  constructor(private service: UrlService, private errorService: ErrorService) {
    this.$url = this.service.url$;
  }

  onSubmit() {
    if (this.shortCode.length === 0)
      return this.errorService.setError('URL cannot be blank');

    this.service.create(this.shortCode);
    this.shortCode = '';
  }

  copyToClipboard(shortCode: string) {
    const url = `${window.location.protocol}//${window.location.host}/${shortCode}`;

    navigator.clipboard.writeText(url);
  }

  goToLongUrl(shortCode: string) {
    window.open(shortCode, '_blank');
  }

  clearCurrentURL() {
    this.service.clearURL();
  }
}
