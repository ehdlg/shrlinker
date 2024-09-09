import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (error$ | async; as error) {
    <div
      class="mt-8 p-4 max-w-[800px] min-w-[250px] w-11/12 mx-auto flex items-center gap-2 m-4"
    >
      <div class="text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      </div>
      <p class="text-red-500 text-lg">{{ error }}</p>
    </div>
    }
  `,
})
export class ErrorComponent {
  public error$!: Observable<string | null>;
  constructor(private errorService: ErrorService) {
    this.error$ = this.errorService.error$;
  }
}
