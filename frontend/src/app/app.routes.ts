import { Routes } from '@angular/router';
import { UrlComponent } from './components/url.component';
import { RedirectComponent } from './components/redirect.component';

export const routes: Routes = [
  { path: '', component: UrlComponent },
  {
    path: ':shortCode',
    component: RedirectComponent,
  },
];
