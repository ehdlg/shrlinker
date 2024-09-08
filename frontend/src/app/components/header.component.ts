import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="flex items-center justify-center bg-white border drop-shadow-sm h-16"
    >
      <h1 class="text-center text-2xl font-bold text-slate-800">shrlinker</h1>
    </header>
  `,
})
export class HeaderComponent {}
