import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center bg-white border drop-shadow-sm h-16">
      <h1
        class="text-center text-4xl font-bold bg-gradient-to-r from-indigo-500  to-indigo-300 text-ellipsis text-transparent bg-clip-text w-fit mx-auto"
      >
        ShrinkLinker
      </h1>
    </header>
  `,
})
export class HeaderComponent {}
